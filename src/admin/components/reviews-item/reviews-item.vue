<template lang="pug">
.card
  .card__header
    .user
      .user__column
        .avatar.avatar--50(:style="reviewPhoto")
      .user__column
        .user__row.user__name {{ review.author }}
        .user__row.user__occ {{ review.occ }}
  .card__content
    .reviews__row
      p {{ review.text }}
  .card__footer
    .controls
      .controls__btn
        button(type="button" @click="editReview").btn.btn--edit Править
      .controls__btn
        button(type="button" @click="deleteTheReview(review.id)").btn.btn--cross Удалить
</template>

<!--SCRIPT-->

<script>
import { mapActions } from 'vuex';

export default {
  name: 'reviews-item',
  props: ['review'],
  methods: {
    ...mapActions('reviews', ['deleteReview']),
    editReview() {
      this.$emit('editReview', this.review);
    },
    deleteTheReview(payload) {
      this.$emit('hideAddingCard');
      this.deleteReview(payload);
    }
  },
  computed: {
    reviewPhoto() {
      return `background-image: url(https://webdev-api.loftschool.com/${this.review.photo})`;
    }
  }
};
</script>

<!--STYLE-->

<style lang="postcss">
.btn {
  &--edit {
    background-image: svg-load('pencil.svg', fill=blue, height=17px);
    background-position: center right;
    padding-right: 30px;
  }
  &--cross {
    background-image: svg-load('cross.svg', fill=red, height=15px);
    background-position: center right;
    padding-right: 30px;
  }
}
</style>