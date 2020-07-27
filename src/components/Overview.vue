<template>
  <div class="main">
    <b-modal
      id="add-transaction"
      class="transaction-modal"
      title="Add Transaction"
      ref="add-modal"
      hide-footer
    >
      <form ref="form">
        <b-form-group label="Type">
          <div class="radio-btns">
            <b-form-radio
              v-model="transaction.type"
              value="income"
              @change="
                options = incomeOptions;
                selectedCategory = null;
              "
              >Income</b-form-radio
            >
            <b-form-radio
              v-model="transaction.type"
              value="expense"
              @change="
                options = expenseOptions;
                selectedCategory = null;
              "
              :disabled="balance === 0"
              >Expense</b-form-radio
            >
          </div>
          <p class="reminder" v-if="balance === 0">
            Your current balance is {{ currentUser.$$symbol }}0
          </p>
        </b-form-group>

        <!-- <b-form-group
          label="Category"
          label-for="category"
          v-if="transaction.type === 'income'"
        >
          <b-form-input
            v-model="transaction.category"
            placeholder="Ex: Payment"
          ></b-form-input>
        </b-form-group> -->

        <b-form-group>
          <label
            >Category
            <b-button class="tooltip-btn" id="tooltip-target-1">
              <font-awesome-icon
                class="pencil"
                @click="
                  customCategory = !customCategory;
                  transaction.category = '';
                "
                :icon="['fas', !customCategory ? 'pencil-alt' : 'sync-alt']"
              />
            </b-button>

            <b-tooltip target="tooltip-target-1" triggers="hover">
              <span v-if="!customCategory">Type custom category</span>
              <span v-else>Choose category</span>
            </b-tooltip>
          </label>
          <b-dropdown
            ref="category-ddown"
            v-if="!customCategory"
            :text="
              transaction.category === ''
                ? 'Select Category'
                : transaction.category
            "
            block
            menu-class="w-100"
            class="category-ddown"
          >
            <template v-slot:button-content>
              <span v-if="selectedCategory === null">Select Category</span>
              <span v-else
                ><font-awesome-icon
                  class="mr-1"
                  :icon="['fas', selectedCategory.icon]"
                />
                {{ selectedCategory.value }}</span
              >
            </template>

            <b-dropdown-form>
              <div
                v-for="(item, index) in options"
                :key="index"
                @click="selectCategory(item)"
              >
                <div class="dd-icons" :class="item.icon">
                  <font-awesome-icon :icon="['fas', item.icon]" />
                </div>

                {{ item.value }}
              </div>
            </b-dropdown-form>
            <!-- <b-dropdown-item
              href="#"
              v-for="(item, index) in options"
              :key="index"
              @click="selectCategory(item)"
            >
              <div class="dd-icons" :class="item.icon">
                <font-awesome-icon :icon="['fas', item.icon]" />
              </div>

              {{ item.value }}</b-dropdown-item
            > -->
          </b-dropdown>
          <b-form-input
            v-else
            v-model="transaction.category"
            placeholder="Enter custom category name"
            autocomplete="off"
          ></b-form-input>
          <!-- <b-form-select
            v-model="transaction.category"
            v-if="!customCategory"
            :options="options"
          >
          </b-form-select>
          <b-form-input
            v-else
            v-model="transaction.category"
            placeholder="Ex: Payment"
          ></b-form-input> -->
        </b-form-group>

        <b-form-group label="Amount" label-for="amount" class="mb-5">
          <b-form-input
            type="number"
            v-model="transaction.amount"
            @keydown="preventInvalidChars($event)"
            id="amount"
            placeholder="Enter amount"
            autocomplete="off"
          ></b-form-input>
        </b-form-group>

        <p
          class="error"
          v-if="
            transaction.type === 'expense' &&
              transaction.amount &&
              +transaction.amount > balance
          "
        >
          The amount is greater than your balance.
        </p>

        <div class="submit-btns">
          <b-button
            class="cancel"
            variant="light"
            @click="hideModal('add-modal')"
            >Cancel</b-button
          >
          <b-button
            :disabled="
              transaction.category === '' ||
                transaction.amount === '' ||
                transaction.amount <= 0 ||
                (transaction.type === 'expense' &&
                  transaction.amount &&
                  +transaction.amount > balance)
            "
            class="submit"
            @click="handleSubmit"
            >Add<b-spinner
              class="modal-spinner"
              v-if="actionLoading"
            ></b-spinner
          ></b-button>
        </div>
      </form>
    </b-modal>

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
            alt=""
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
                <button class="btn-link" @click="hidePopover('user-ddown')">
                  <font-awesome-icon :icon="['fas', 'sync-alt']" /><span
                    >RESET DATA</span
                  >
                </button>
              </li>
              <li>
                <button @click="signOut()" class="btn-link">
                  <font-awesome-icon :icon="['fas', 'power-off']" /><span
                    >SIGN OUT</span
                  >
                </button>
              </li>
            </ul>
          </b-popover>
        </div>
        <!-- <b-button class="tooltip-btn" id="tooltip-signout">
          <font-awesome-icon
            @click="signOut()"
            class="sign-out"
            :icon="['fas', 'sign-out-alt']"
          />
        </b-button> -->

        <!-- <b-tooltip
          target="tooltip-signout"
          title="Sign Out"
          triggers="hover"
        ></b-tooltip> -->
      </header>

      <body>
        <section class="left">
          <h2>Summary</h2>
          <div class="left-content">
            <div class="balance">
              <h4>BALANCE</h4>
              <span
                >{{ currentUser.$$symbol }}
                {{ balance.toLocaleString() }}</span
              >
            </div>
            <div class="summary">
              <div class="income">
                <h4>
                  TOTAL INCOME
                </h4>
                <span
                  >{{ currentUser.$$symbol }}
                  {{ income.toLocaleString() }}</span
                >
              </div>
              <div class="divider"></div>
              <div class="expense">
                <h4>EXPENSE</h4>
                <span
                  >{{ currentUser.$$symbol }}
                  {{ expense.toLocaleString() }}</span
                >
              </div>
            </div>
          </div>
        </section>
        <section class="right">
          <div class="right-header">
            <h2>Transactions</h2>
            <button v-b-modal.add-transaction>
              <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
            </button>
          </div>
          <div v-if="transactions.length < 1 && !transactionLoading">
            <center>
              <h4>No Transactions Yet</h4>
            </center>
          </div>

          <div v-if="transactionLoading">
            <center>
              <b-spinner></b-spinner>
            </center>
          </div>

          <div
            class="transaction"
            v-for="(item, index) in transactions"
            :key="index"
            :class="[item.type]"
            :id="`popover-1-${index}`"
          >
            <!-- <b-button :id="`popover-1-${index}`" variant="primary">test</b-button> -->
            <div class="transaction-name">
              <div class="transaction-icon" :class="[item.icon]">
                <font-awesome-icon class="icon" :icon="['fas', item.icon]" />
              </div>
              <p>
                {{ item.category }}
                <span>{{ item.creationDate }}</span>
              </p>
            </div>

            <p>
              {{ currentUser.$$symbol }}{{ item.amount.toLocaleString() }}
            </p>

            <b-popover
              v-if="item.amount < balance || expense === 0"
              :target="`popover-1-${index}`"
              :placement="isTabOrMobile ? 'top' : 'right'"
              triggers="hover focus"
              ><font-awesome-icon
                @click="openDeleteModal(item)"
                v-b-modal.delete-transaction
                class="trash"
                :icon="['fas', 'trash-alt']"
            /></b-popover>
          </div>
        </section>
      </body>
      <footer>
        <h5>Personal Expense Tracker</h5>
      </footer>
    </div>
    <b-modal
      id="delete-transaction"
      ref="delete-transaction"
      title="Delete Transaction"
      hide-footer
    >
      <h4 class="mb-5 mt-3">Are you sure you want to delete this?</h4>

      <div class="submit-btns">
        <b-button
          class="cancel"
          variant="light"
          @click="hideModal('delete-transaction')"
          >Cancel</b-button
        >
        <b-button class="submit" @click="handleDelete"
          >Delete<b-spinner
            class="modal-spinner"
            v-if="actionLoading"
          ></b-spinner
        ></b-button>
      </div>
    </b-modal>

    <b-modal ref="reset-data" title="Reset Data" id="reset-data" hide-footer>
      <h4 class="my-4 mb-5">Are you sure you want reset your data?</h4>

      <div class="submit-btns">
        <b-button
          class="cancel"
          variant="light"
          @click="hideModal('reset-modal')"
          >Cancel</b-button
        >
        <b-button class="submit" @click="resetData"
          >Reset<b-spinner
            class="modal-spinner"
            v-if="actionLoading"
          ></b-spinner
        ></b-button>
      </div>
    </b-modal>

    <!-- <ResetDataModal ref="ResetDataModal" /> -->
  </div>
</template>

<script>
// const axios = require('axios');
import TransactionService from '../service/TransactionService';
import moment from 'moment';
import UserService from '../service/UserService';
// import ResetDataModal from './modal/ResetDataModal';

export default {
  name: 'Overview',
  props: ['user'],
  data() {
    return {
      ipDataKey: process.env.VUE_APP_IPDATAKEY,
      customCategory: false,
      currentUser: JSON.parse(localStorage.getItem('user')) || {},
      transaction: {
        userId: '',
        type: 'income',
        category: '',
        amount: '',
        icon: '',
      },
      transactions: [],
      income: 0,
      expense: 0,
      balance: 0,
      options: [],
      incomeOptions: [
        { value: 'salary', icon: 'wallet' },
        { value: 'sales', icon: 'tags' },
        { value: 'rewards', icon: 'hand-holding-usd' },
        { value: 'lottery', icon: 'dice-four' },
        { value: 'allowance', icon: 'money-bill-alt' },
        { value: 'coupons', icon: 'receipt' },
        { value: 'others', icon: 'random' },
      ],
      expenseOptions: [
        { value: 'payment', icon: 'money-check' },
        { value: 'car', icon: 'car' },
        { value: 'food', icon: 'pizza-slice' },
        { value: 'house', icon: 'home' },
        { value: 'pets', icon: 'dog' },
        { value: 'grocery', icon: 'shopping-cart' },
        { value: 'coffee', icon: 'mug-hot' },
        { value: 'travel', icon: 'plane' },
        { value: 'investment', icon: 'chart-line' },
        { value: 'alcohol', icon: 'beer' },
        { value: 'personal', icon: 'user-tag' },
        { value: 'shopping', icon: 'shopping-bag' },
        { value: 'clothing', icon: 'tshirt' },
        { value: 'medical', icon: 'briefcase-medical' },
        { value: 'gifts', icon: 'gift' },
        { value: 'insurance', icon: 'chart-bar' },
        { value: 'gadgets', icon: 'mobile-alt' },
        { value: 'loans', icon: 'credit-card' },
        { value: 'education', icon: 'graduation-cap' },
        { value: 'others', icon: 'random' },
      ],
      transactionLoading: true,
      actionLoading: false,
      itemToDelete: null,
      isTabOrMobile: false,
      selectedCategory: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null) next({ name: 'SignIn' });
    else next();
  },
  created() {
    // this.getCountry();
    this.options = this.incomeOptions;
    this.isTabOrMobile = window.innerWidth < 768;

    // this.country = JSON.parse(localStorage.getItem('country')) || [];
    this.getTransactions();
  },
  methods: {
    getTransactions() {
      TransactionService.getAll(this.currentUser.id).then((response) => {
        let income = 0;
        let expense = 0;

        if (response.data.length > 0) {
          response.data.forEach((data) => {
            const amount = +data.amount;

            if (data.type === 'income') {
              income += amount;
            } else {
              expense += amount;
            }

            this.income = income;
            this.balance = income - expense;
            this.expense = expense;
          });
        } else {
          this.income = this.expense = this.balance = 0;
        }

        const transactions = response.data.sort(
          (a, b) => moment(b.creationDate) - moment(a.creationDate)
        );

        this.transactions = transactions.map((transaction) => {
          transaction.amount = +transaction.amount;
          transaction.creationDate = moment(transaction.creationDate).fromNow();
          return transaction;
        });

        this.transactionLoading = false;
        this.options = this.incomeOptions;

        this.updateUserModificationDate();

        this.resetModals();
      });
    },
    selectCategory(item) {
      this.transaction.category = item.value;
      this.selectedCategory = item;
      this.$refs['category-ddown'].hide();
    },
    resetModals() {
      this.$refs['delete-transaction'].hide();
      this.$refs['add-modal'].hide();
      this.$refs['reset-data'].hide();

      this.transaction = {
        type: 'income',
        category: '',
        amount: '',
        icon: '',
      };

      this.selectedCategory = null;
      this.customCategory = false;
      this.actionLoading = false;
    },
    // getCountry() {
    //   axios
    //     .get(`https://api.ipdata.co?api-key=${this.ipDataKey}`)
    //     .then((response) => {
    //       this.country = response.data;
    //       // localStorage.setItem('country', JSON.stringify(this.country));
    //     })
    //     .catch((error) => console.log(error));
    // },
    handleSubmit() {
      this.actionLoading = true;

      const item =
        this.transaction.type === 'income' && this.customCategory
          ? { icon: 'coins' }
          : this.transaction.type === 'expense' && this.customCategory
          ? { icon: 'money-bill' }
          : this.options.find(
              (icon) => icon.value === this.transaction.category
            );

      this.transaction.icon = item.icon;
      this.transaction.userId = this.currentUser.id;

      TransactionService.create(this.transaction).then(
        () => {
          this.getTransactions();
        },
        (error) => console.log(error)
      );
    },
    openDeleteModal(item) {
      this.itemToDelete = item;
    },
    handleDelete() {
      this.actionLoading = true;

      TransactionService.delete(this.itemToDelete._id).then(
        () => {
          this.getTransactions();
        },
        (error) => console.log(error)
      );
    },
    updateUserModificationDate() {
      UserService.update(this.currentUser.id).then(() => (error) =>
        console.log(error)
      );
    },
    preventInvalidChars(evt) {
      if (
        (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
        evt.which > 57
      ) {
        evt.preventDefault();
      }
    },
    signOut() {
      localStorage.clear();
      this.$router.push({ name: 'SignIn' });
    },
    resetData() {
      this.actionLoading = true;
      
      TransactionService.reset(this.currentUser.id).then(
        () => {
          this.getTransactions();
        },
        (error) => console.log(error)
      );
    },
    // optionsState() {
    //   this.options =
    //     this.transaction.type === 'income'
    //       ? this.incomeOptions
    //       : this.expenseOptions;

    //       console.log(this.transaction.type, this.options)
    // },
    hideModal(modal) {
      this.$refs[modal].hide();
    },
    hidePopover(popover) {
      this.$refs[popover].$emit('close');
      this.$refs['reset-data'].show();
    }
  },
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
        // border: 3px solid #ffb129;
        // border-radius: 50%;
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
    // @include flex(center, fle, column);
    // height: 80vh;
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
          // background: #ffffff;
          background: #01cc88;
          // background: #ff2e63;
          // font-size: 20px;
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
        // transition: .4s;
        // cursor: pointer;

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

        // .money-check {
        //   background: #302387;
        // }

        // .car {
        //   background: #323edd;
        // }

        // .pizza-slice {
        //   background: #ffd31d;
        // }

        // .home {
        //   background: #8105d8;
        // }

        // .dog {
        //   background: #0fabbc;
        // }

        // .shopping-cart {
        //   background: #e36387;
        // }

        // .mug-hot {
        //   background: #df7861;
        // }

        // .map-marker-alt {
        //   background: #3e64ff;
        // }

        // .coins {
        //   background: #01cc88;
        // }

        // .money-bill {
        //   background: #fa163f;
        // }
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

.tooltip-btn {
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  border: 0;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent !important;
    outline: none !important;
    box-shadow: none !important;
    border: 0 !important;
  }

  .pencil {
    margin: 0 0 1px 5px;
    color: #ff2e63;
    font-size: 14px;
    cursor: pointer;
  }
}

.radio-btns {
  display: flex;

  .custom-control {
    margin-right: 10px;
  }
}

.reminder {
  margin-top: 10px;
  color: #ff2e63;
  font-size: 14px;
  font-weight: bold;
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
