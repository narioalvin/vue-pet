<template>
  <div class="main">
    <div class="content">
      <header>
        <div class="welcome">
          <div class="name">
            <h1>{{ currentUser.name }}</h1>
            <p>Last modified: {{ currentUser.modificationDate }}.</p>
          </div>
        </div>
        <div class="avatar">
          <img
            class="selected-avatar"
            :src="require(`../assets/avatars/${currentUser.avatar}.svg`)"
            width="40"
            alt
            id="popover-dropdown"
          />
          <font-awesome-icon :icon="['fas', 'caret-down']" />

          <b-popover
            target="popover-dropdown"
            placement="bottom"
            triggers="hover click"
            custom-class="pop-dropdown"
            ref="user-ddown"
          >
            <ul>
              <li>
                <button
                  class="btn-link"
                  @click="
                    hidePopover('user-ddown');
                    openResetDataModal();
                  "
                >
                  <font-awesome-icon :icon="['fas', 'sync-alt']" />
                  <span>RESET DATA</span>
                </button>
              </li>
              <li>
                <button @click="signOut()" class="btn-link">
                  <font-awesome-icon :icon="['fas', 'power-off']" />
                  <span>SIGN OUT</span>
                </button>
              </li>
            </ul>
          </b-popover>
        </div>
      </header>

      <div v-if="transactionLoading">
        <center>
          <b-spinner></b-spinner>
        </center>
      </div>

      <body v-else>
        <section class="left">
          <h2>Summary</h2>
          <div class="left-content">
            <div class="balance">
              <h4>BALANCE</h4>
              <span>
                {{ currentUser.$$symbol }}
                {{ transactions.$$balance.toLocaleString() }}
              </span>
            </div>
            <div class="summary">
              <div class="income">
                <h4>TOTAL INCOME</h4>
                <span>
                  {{ currentUser.$$symbol }}
                  {{ transactions.$$income.toLocaleString() }}
                </span>
              </div>
              <div class="divider"></div>
              <div class="expense">
                <h4>EXPENSE</h4>
                <span>
                  {{ currentUser.$$symbol }}
                  {{ transactions.$$expense.toLocaleString() }}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section class="right">
          <div class="right-header">
            <h2>Transactions</h2>
            <button @click="openAddTransactionModal">
              <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
            </button>
          </div>
          <div v-if="transactions.data.length < 1 && !transactionLoading">
            <center>
              <h4>No Transactions Yet</h4>
            </center>
          </div>

          <div
            class="transaction"
            v-for="(item, index) in transactions.data"
            :key="index"
            :class="[item.type]"
            :id="`popover-1-${index}`"
          >
            <div class="transaction-name">
              <div class="transaction-icon" :class="[item.icon]">
                <font-awesome-icon class="icon" :icon="['fas', item.icon]" />
              </div>
              <p>
                {{ item.category }}
                <span>{{ item.$$creationDate }}</span>
              </p>
            </div>

            <p>{{ currentUser.$$symbol }}{{ item.amount.toLocaleString() }}</p>

            <b-popover
              v-if="
                item.amount < transactions.$$balance ||
                  transactions.$$expense === 0
              "
              :target="`popover-1-${index}`"
              :placement="isTabOrMobile ? 'top' : 'right'"
              triggers="hover focus"
            >
              <font-awesome-icon
                @click="openDeleteModal(item)"
                class="trash"
                :icon="['fas', 'trash-alt']"
              />
            </b-popover>
          </div>
        </section>
      </body>
      <footer>
        <h5>Personal Expense Tracker</h5>
      </footer>
    </div>

    <AddTransactionModal
      ref="AddTransactionModal"
      :currentUser="currentUser"
      :transactions="transactions"
    />
    <DeleteTransactionModal
      ref="DeleteTransactionModal"
      :transaction="transactionToDelete"
    />
    <ResetDataModal ref="ResetDataModal" :currentUser="currentUser" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserService from '../service/UserService';
import AddTransactionModal from './modal/AddTransactionModal';
import ResetDataModal from './modal/ResetDataModal';
import DeleteTransactionModal from './modal/DeleteTransactionModal';

export default {
  name: 'Overview',
  props: ['user'],
  computed: mapGetters(['transactions']),
  components: { ResetDataModal, DeleteTransactionModal, AddTransactionModal },
  data() {
    return {
      ipDataKey: process.env.VUE_APP_IPDATAKEY,
      currentUser: JSON.parse(localStorage.getItem('user')) || {},
      transactionLoading: true,
      transactionToDelete: null,
      isTabOrMobile: false
    };
  },
  beforeRouteEnter(to, from, next) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null) next({ name: 'SignIn' });
    else next();
  },
  created() {
    this.isTabOrMobile = window.innerWidth < 768;
    this.getTransactions();
  },
  methods: {
    ...mapActions(['getAll']),

    getTransactions() {
      this.getAll(this.currentUser.id).then(
        () => {
          this.transactionLoading = false;
        },
        () => {
          this.transactionLoading = false;
        }
      );
    },
    openAddTransactionModal() {
      this.$refs.AddTransactionModal.openModal();
    },
    openDeleteModal(transaction) {
      this.transactionToDelete = transaction;
      this.$refs.DeleteTransactionModal.openModal();
    },
    openResetDataModal() {
      this.$refs.ResetDataModal.openModal();
    },
    updateUserModificationDate() {
      UserService.update(this.currentUser.id).then(
        response => {
          console.log(response);
        },
        error => console.log(error)
      );
    },
    signOut() {
      localStorage.clear();
      this.$router.push({ name: 'SignIn' });
    },
    hidePopover(popover) {
      this.$refs[popover].$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

span {
  font-weight: normal;
}

button {
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }
}

h1,
p {
  margin-bottom: 0;
}

h2 {
  font-weight: bold;
  font-size: 21px;
}

h4 {
  font-size: 16px;
  margin-bottom: 0;
  font-weight: bold;
}

.main .content {
  padding: 15px;

  header {
    margin-bottom: 20px;
    @include flex(center, space-between, row);

    .sign-out {
      font-size: 22px;
      cursor: pointer;
      color: #ff2e63;

      &:hover {
        color: #cc0033;
      }
    }

    .welcome {
      @include flex(center, flex-start, row);

      .name {
        p {
          color: #bfbfbf;
          font-size: 14px;
        }

        h1 {
          font-size: 32px;
          text-transform: capitalize;
        }
      }
    }

    .avatar {
      position: relative;

      img {
        width: 65px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }

      svg {
        position: relative;
        top: 42px;
        right: 38px;
        font-size: 16px;
      }
    }

    h1 {
      font-weight: bolder;
    }
  }

  body {
    color: #ffffff;
    padding: 10px;
    border-radius: 15px;
    background: #10194e;

    .left {
      width: 100%;
      margin-bottom: 30px;

      .left-content,
      .right-content {
        width: 100%;
        @include flex(center, center, column);
        background: #ffffff;
        border-radius: 10px;
      }

      h2,
      .left-content {
        margin-bottom: 15px;
      }

      .left-content {
        .balance {
          width: 100%;
          @include flex(center, center, column);
          height: 80px;
          background: #01cc88;
          font-weight: bold;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border-bottom: 1px solid #e6e6e6;
          color: #ffffff;

          h4 {
            font-size: 20px;
          }

          span {
            font-size: 20px;
          }
        }

        .summary {
          @include flex(center, space-evenly, row);
          font-weight: bold;
          width: 100%;
          height: 100px;
          color: #202020;

          .divider {
            border-right: 1px solid #e6e6e6;
            height: 60px;
          }

          .income,
          .expense {
            width: 125px;
            height: 60px;

            span {
              word-break: break-all;
              text-align: center;
            }

            @include flex(center, space-evenly, column);
          }

          .income {
            span {
              color: #01cc88;
              word-break: break-all;
              text-align: center;
            }
          }

          .expense span {
            color: #ff5d6c;
          }
        }

        span {
          font-size: 18px;
        }
      }
    }

    .right {
      width: 100%;

      .right-header {
        @include flex(center, space-between, row);
        margin-bottom: 20px;
      }

      button {
        padding: 8px;
        border-radius: 50%;
        border: 0;
        height: 40px;
        width: 40px;
        background: #ff2e63;
        color: #ffffff;

        &:hover {
          background: #cc0033;
        }

        svg {
          font-size: 18px;
        }
      }

      .income {
        border-right: 8px solid #01cc88;
      }

      .expense {
        border-right: 8px solid #fa163f;
      }

      .transaction {
        @include flex(center, space-between, row);
        background: #ffffff;
        color: #202020;
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 10px;
        box-shadow: 10px 10px 44px 0px rgba(0, 0, 0, 0.27);
        font-weight: bold;

        &:hover {
          background: #f2f2f2;
        }

        .transaction-name {
          @include flex(center, flex-start, row);

          p {
            text-transform: capitalize;
            @include flex(flex-start, flex-start, column);

            span {
              color: #a6a6a6;
              font-size: 12px;
            }
          }
        }

        .transaction-icon {
          width: 35px;
          height: 35px;
          border-radius: 7px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          color: #ffffff;

          svg {
            font-size: 15px;
          }
        }
      }
    }
  }

  footer {
    text-align: center;
    margin-top: 40px;

    h5 {
      color: #999999;
    }
  }
}

@media (min-width: 768px) {
  .main .content {
    padding: 15px 30px;

    body {
      padding: 20px 40px;

      .left {
        @include flex(center, center, column);
        margin: 0 30px 0 0;

        .left-content .summary {
          .income,
          .expense {
            width: 100%;
            padding: 0 15px;
          }
        }

        h2 {
          width: 100%;
        }
      }

      .right {
        padding: 15px 0;
      }
    }
  }
}

@media (min-width: 992px) {
  h4 {
    font-size: 18px;
  }

  .main .content {
    padding: 15px 200px;

    header .welcome .name h1 {
      font-size: 38px;
    }

    body {
      h2 {
        font-size: 24px;
      }

      .left .left-content {
        .balance {
          font-size: 23px;
        }

        .summary {
          font-size: 17px;
        }
      }
    }
  }
}
</style>
