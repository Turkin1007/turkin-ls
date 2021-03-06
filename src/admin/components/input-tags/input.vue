<template lang="pug">
.input(v-if="type === 'textarea'")
  label(v-if="title" :for="'input__' + name").input__label {{ title }}
  .input__wrapper
    textarea(
      :name="name"
      :class="{ 'textarea__element--error': errorText, 'textarea__element--strong': strong }"
      :id="'input__' + name"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)").input__element
  vc-tooltip-input(:errorText="errorText")

.input(v-else :class="iconClass")
  label(v-if="title" :for="'input__' + name").input__label {{ title }}
  .input__wrapper
    input(
      autocomplete="off"
      :autofocus="autofocus"
      :type="type"
      :name="name"
      :id="'input__' + name"
      :class="{ 'input__element--error': errorText, 'input__element--strong': strong }"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)").input__element

  vc-tooltip-input(:errorText="errorText")
</template>

<!--SCRIPT-->

<script>
export default {
  name: 'input',
  props: {
    strong: Boolean,
    name: String,
    autofocus: Boolean,
    title: String,
    type: {
      type: String,
      default: 'text'
    },
    value: String | Number,
    icon: {
      type: String,
      default: '',
      validator: value => ['', 'user', 'key'].includes(value)
    },
    placeholder: {
      type: String,
      default: ''
    },
    errorText: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass () {
      const icon = this.icon;

      return icon.length ? `input--iconed input__icon--${ icon }` : '';
    }
  },
  components: {
    vcTooltipInput: () => import('../tooltip-input/tooltip-input.vue')
  },
  watch: {
    value() {
      this.value = this.value.split(',');
    },
  }
};
</script>

<!--STYLE-->

<style lang="postcss" scoped>
.input {
  position: relative;

  &__label {
    display: block;
    color: rgba($links-color, .3);
    font-weight: 600;
    line-height: 36px;
    cursor: pointer;
  }

  &__element {
    background: transparent;
    border: 0;
    color: $links-color;
    width: 100%;
    line-height: 36px;
    border-bottom: 1px solid $links-color;
    cursor: pointer;

    &:focus {
      cursor: initial;
    }

    &--strong {
      font-size: 18px;
      font-weight: 600;

      &::placeholder {
        color: inherit;
        font-weight: inherit;
      }
    }
  }

  &--iconed {
    .input__label {
      margin-left: 45px;
    }

    .input__element {
      padding-left: 45px;
      background: left center / auto 29px no-repeat;
    }
  }

  &__icon {
    @each $icon in (user, key) {
      &--$(icon) {
        .input__element {
          background-image: svg-load("$(icon).svg", fill=#cfd2d7);

          &:focus:not(.input__element--error) {
            border-bottom-color: $links-active;
            background-image: svg-load("$(icon).svg", fill=$links-active);
          }

          &--error {
            border-bottom-color: $errors-color;
            background-image: svg-load("$(icon).svg", fill=$errors-color);
          }
        }
      }
    }
  }
}

textarea.input {
  &__element {
    height: 146px;
    padding: 10px 20px;
    resize: none;
    border: 1px solid rgba($text-color, 0.3);
  }
}
</style>