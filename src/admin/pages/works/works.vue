<template lang="pug">
include ../../../blocks/form-elements.pug
include ../../../blocks/button.pug

section.works
  .page__container
    .page__header
      .page__columns
        h1.page-title.works__title Блок «Работы»
    .page__content
      .page__row(v-if="showAddingCard")
        vc-works-add-new(:work="work" @hideAddingCard="hideAddingCard")
      .page__row
        ul.works__list
          li.works__item
            .card.card--add
              button(type="button" @click="showAddingCard = true").btn.btn--add.btn--xbig

          li(v-for="work in getWorks" :key="work.id").works__item
            vc-works-item(:work="work" @editWork="editWork")
</template>

<!--SCRIPT-->

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    showAddingCard: false,
    work: {
      title: '',
      link: 'http://test.com',
      description: '',
      techs: '',
      photo: ''
    }
  }),
  components: {
    vcInput: () => import('components/input/input.vue/'),
    vcWorksItem: () => import('components/works-item/works-item.vue/'),
    vcWorksAddNew: () => import('components/works-add-new/works-add-new.vue/'),
  },
  methods: {
    ...mapActions('works', ['loadWorks']),

    hideAddingCard () {
      this.showAddingCard = false;
      this.work = { ...{
          title: '',
          link: 'http://test.com',
          description: '',
          techs: '',
          photo: ''
        } }
    },
    editWork (payload) {
      this.work = payload;
      this.showAddingCard = true;
    }
  },
  computed: {
    ...mapGetters('works', ['getWorks']),
    ...mapState('user', {
      userID: state => state.user.id
    })
  },
  created () {
    this.loadWorks(this.userID);
  }
};
</script>

<!--STYLE-->
<style lang="postcss">
@import "../../../styles/mixins.pcss";

.works {
  img {
    width: 100%;
  }

  &__figure {
    position: relative;
    margin: 0;
    padding: 0;
  }

  &__figcaption {
    position: absolute;
    bottom: 3%;
    right: 3%;
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