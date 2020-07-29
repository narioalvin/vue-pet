<template>
  <b-modal
    class="transaction-modal"
    title="Add Transaction"
    ref="add-transaction"
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
            :disabled="transactions.$$balance === 0"
            >Expense</b-form-radio
          >
        </div>
        <p class="reminder" v-if="transactions.$$balance === 0">
          Your current balance is {{ currentUser.$$symbol }}0
        </p>
      </b-form-group>

      <b-form-group>
        <label>
          Category
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
            <span v-else>
              <font-awesome-icon
                class="mr-1"
                :icon="['fas', selectedCategory.icon]"
              />
              {{ selectedCategory.value }}
            </span>
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
        </b-dropdown>
        <b-form-input
          v-else
          v-model="transaction.category"
          placeholder="Enter custom category name"
          autocomplete="off"
        ></b-form-input>
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
            +transaction.amount > transactions.$$balance
        "
      >
        The amount is greater than your balance.
      </p>

      <div class="submit-btns">
        <b-button class="cancel" variant="light" @click="hideModal('add-modal')"
          >Cancel</b-button
        >
        <b-button
          :disabled="
            (selectedCategory === null && !customCategory) ||
              transaction.category === '' ||
              transaction.amount === '' ||
              transaction.amount <= 0 ||
              (transaction.type === 'expense' &&
                transaction.amount &&
                +transaction.amount > transactions.$$balance)
          "
          class="submit"
          @click="handleSubmit"
        >
          Add
          <b-spinner class="modal-spinner" v-if="actionLoading"></b-spinner>
        </b-button>
      </div>
    </form>
  </b-modal>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTransactionModal',
  props: ['currentUser', 'transactions'],
  data() {
    return {
      transaction: {
        userId: '',
        type: 'income',
        category: '',
        amount: '',
        icon: ''
      },
      customCategory: false,
      options: [],
      incomeOptions: [
        { value: 'salary', icon: 'wallet' },
        { value: 'sales', icon: 'tags' },
        { value: 'rewards', icon: 'hand-holding-usd' },
        { value: 'lottery', icon: 'dice-four' },
        { value: 'allowance', icon: 'money-bill-alt' },
        { value: 'coupons', icon: 'receipt' },
        { value: 'others', icon: 'random' }
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
        { value: 'others', icon: 'random' }
      ],
      selectedCategory: null,
      actionLoading: false,
      showModal: false
    };
  },
  created() {
    this.options = this.incomeOptions;
  },
  methods: {
    ...mapActions(['addTransaction', 'updateUser']),
    openModal() {
      this.$refs['add-transaction'].show();
    },
    hideModal() {
      this.$refs['add-transaction'].hide();
    },
    selectCategory(item) {
      this.transaction.category = item.value;
      this.selectedCategory = item;
      this.$refs['category-ddown'].hide();
    },
    handleSubmit() {
      this.actionLoading = true;

      const item =
        this.transaction.type === 'income' && this.customCategory
          ? { icon: 'coins' }
          : this.transaction.type === 'expense' && this.customCategory
          ? { icon: 'money-bill' }
          : this.options.find(icon => icon.value === this.transaction.category);

      this.transaction.icon = item.icon;
      this.transaction.userId = this.currentUser.id;

      this.addTransaction(this.transaction).then(
        () => {
          this.updateUser(this.currentUser.id);
          this.resetInputs();
          this.hideModal();
        },
        () => (this.actionLoading = false)
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
    resetInputs() {
      this.transaction = {
        type: 'income',
        category: '',
        amount: '',
        icon: ''
      };

      this.options = this.incomeOptions;
      this.selectedCategory = null;
      this.customCategory = false;
      this.actionLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
