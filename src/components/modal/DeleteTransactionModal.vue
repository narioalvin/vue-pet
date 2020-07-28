<template>
  <b-modal
    id="delete-transaction"
    ref="delete-transaction"
    title="Delete Transaction"
    hide-footer
  >
    <h5 class="mb-5 mt-3">Are you sure you want to delete this?</h5>

    <div class="submit-btns">
      <b-button
        class="cancel"
        variant="light"
        @click="hideModal('delete-transaction')"
        >Cancel</b-button
      >
      <b-button class="submit" @click="handleDelete">
        Delete
        <b-spinner class="modal-spinner" v-if="actionLoading"></b-spinner>
      </b-button>
    </div>
  </b-modal>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DeleteTransactionModal',
  props: ['transaction'],
  data() {
    return {
      actionLoading: false
    };
  },
  methods: {
    ...mapActions(['deleteTransaction']),
    openModal() {
      this.$refs['delete-transaction'].show();
    },
    hideModal() {
      this.$refs['delete-transaction'].hide();
    },

    handleDelete() {
      this.actionLoading = true;

      this.deleteTransaction(this.transaction._id).then(
        () => {
          this.hideModal();
          this.actionLoading = false;
        },
        () => (this.actionLoading = false)
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
