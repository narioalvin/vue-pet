<template>
  <b-modal ref="reset-data" title="Reset Data" id="reset-data" hide-footer>
    <h5 class="my-4 mb-5">Are you sure you want reset your data?</h5>

    <div class="submit-btns">
      <b-button class="cancel" variant="light" @click="hideModal"
        >Cancel</b-button
      >
      <b-button class="submit" @click="resetData">
        Reset
        <b-spinner class="modal-spinner" v-if="actionLoading"></b-spinner>
      </b-button>
    </div>
  </b-modal>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ResetDataModal',
  props: ['currentUser'],
  data() {
    return {
      actionLoading: false
    };
  },
  methods: {
    ...mapActions(['resetTransactions']),
    openModal() {
      this.$refs['reset-data'].show();
    },
    hideModal() {
      this.$refs['reset-data'].hide();
    },
    resetData() {
      this.actionLoading = true;

      this.resetTransactions(this.currentUser.id).then(
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

<style lang="scss" scoped>
</style>
