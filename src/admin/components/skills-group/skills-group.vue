<template lang="pug">
.card
  vc-skills-title(:category="category")
  .card__content
    ul.skills
      li(v-for="skill in category.skills" :key="skill.id")
        vc-skills-item(:skill="skill")
  .card__footer
    form(@submit.prevent="addNewSkill" :class="{ 'is-blocked': formBlocked }").add-new-skill
      .add-new-skill__cell
        vc-input(type="text" name="title" placeholder='Новый навык' v-model="skill.title")
      .add-new-skill__cell
        vc-input(type="number" name="percent" v-model="skill.percent")
      .add-new-skill__cell
        button(type="submit").btn.btn--add.btn--big
</template>

<!--SCRIPT-->

<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: ['category'],
  data () {
    return {
      formBlocked: false,
      skill: {
        title: '',
        percent: 0,
        category: this.category.id
      }
    };
  },
  components: {
    vcInput: () => import('components/input/input.vue/'),
    vcSkillsItem: () => import('components/skills-item/skills-item.vue/'),
    vcSkillsTitle: () => import('components/skills-title/skills-title.vue/'),
  },
  methods: {
    ...mapActions('categories', ['addCategory', 'loadCategories']),
    ...mapActions('skills', ['addSkill']),
    ...mapActions('tooltip', ['showTooltip']),

    async addNewSkill () {
      this.formBlocked = true;

      try {
        await this.addSkill(this.skill);
        this.showTooltip({ type: 'success', message: 'Скилл успешно добавлен' });
      } catch ({ message }) {
        this.showTooltip({ type: 'error', message });
      } finally {
        this.formBlocked = "";
        this.skill.percent = 0;
        this.skill.title = "";
      }
    }
  }
};
</script>