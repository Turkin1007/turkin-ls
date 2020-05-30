<template lang="pug">
include ../../../blocks/form-elements.pug
include ../../../blocks/button.pug
include ../../../mixins.pug

section.reviews
  .page__container
    .page__header
      .page__columns
        h1.page-title.works__title Блок «Отзывы»
    .page__content
      .page__row(v-if="showAddingCard")
        vc-reviews-add-new(:review="review" @hideAddingCard="hideAddingCard")
      .page__row
        ul.reviews__list
          li.reviews__item
            .card.card--add
              button(type="button" @click="showAddingCard = true").btn.btn--add.btn--xbig
          li(v-for="review in getReviews" :key="review.id").reviews__item
            vc-reviews-item(:review="review" @editReview="editReview" @hideAddingCard="hideAddingCard")
</template>

<!--SCRIPT-->

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    showAddingCard: false,
    review: {
      author: '',
      occ: '',
      text: '',
      photo: ''
    }
  }),
  components: {
    vcInput: () => import('components/input/input.vue/'),
    vcReviewsItem: () => import('components/reviews-item/reviews-item.vue/'),
    vcReviewsAddNew: () => import('components/reviews-add-new/reviews-add-new.vue/'),
  },
  methods: {
    ...mapActions('reviews', ['loadReviews']),
    hideAddingCard () {
      this.showAddingCard = false;
      this.review = { ...{
          author: '',
          occ: '',
          text: '',
          photo: ''
        } }
    },
    editReview (payload) {
      this.review = payload;
      this.showAddingCard = true;
    }
  },
  computed: {
    ...mapGetters('reviews', ['getReviews']),
    ...mapState('user', {
      userID: state => state.user.id
    })
  },
  created () {
    this.loadReviews(this.userID);
  }
};
</script>

<!--STYLE-->

<style lang="postcss">
@import "../../../styles/mixins.pcss";

.reviews{
  img {
    width: 100%;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
  }

  &__item {
    flex-basis: calc(100% / 3 - 30px);
    margin-left: 30px;
    margin-bottom: 30px;
    @include desktop {
      flex-basis: calc(100% / 2 - 30px);
    }
    @include tablets {
      flex-basis: 100%;
    }
  }

  &__row {
    display: flex;
    margin-bottom: 20px;

    p {
      color: rgba($text-color, .7);
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
    }
  }
}
</style>