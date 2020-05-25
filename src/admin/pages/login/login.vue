<template lang="pug">
section.login
  .login__content
    .login__title Авторизация
    form(@submit.prevent="submit").login__form
      .login__row
        .input.input--iconed.input__icon--user
          label(for="input__name").input__label Логин
          .input__wrapper
            input(
              type="text"
              name="name"
              id="input__name"
              v-model="name"
              v-bind:class="{ 'input__element--error': validation.hasError('name') }"
            ).input__element
          .tooltip-container(class="showed")
            .input-tooltip(v-bind:class="{ 'input-tooltip--showed': validation.hasError('name') }") {{ validation.firstError('name') }}
      .login__row
        .input.input--iconed.input__icon--key
          label(for="input__password").input__label Пароль
          .input__wrapper
            input(
              type="text"
              name="name"
              id="input__password"
              v-model="password"
              v-bind:class="{ 'input__element--error': validation.hasError('password') }"
            ).input__element
          .tooltip-container(class="showed")
            .input-tooltip(v-bind:class="{ 'input-tooltip--showed': validation.firstError('password') }") {{ validation.firstError('password') }}
      .login__row
        .login__btn
          button(type="submit").btn.btn--feedback ОТПРАВИТЬ

  
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator';
const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  data: () => ({
    name: '',
    password: '',
  }),
  validators: {
    name: function (value) {
      return Validator.value(value).required('Поле должно быть заполненно').minLength(5, 'мин. 5 символов')
    },
    password: function (value) {
      return Validator.value(value).required('Поле должно быть заполненно').minLength(8, 'мин. 8 символов')
    },
  },
  methods: {
    submit: function () {
        this.$validate()
          .then(function (success) {
            if (success) {
              alert('Validation succeeded!');
            }
          });
      }
  }
};
</script>

<style lang="postcss" scoped>
.login {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__content {
    width: 563px;
    padding: 50px 77px 60px;
    background: #fff;
    margin: 0 auto;
    position: relative;
  }

  &__title {
    font-weight: 900;
  }

  &__row:not(:last-child) {
    margin-bottom: 40px;
  }
  &__title {
    color: #414c63;
    font-size: 36px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    margin-bottom: 34px;
  }

  &__btn {
    display: flex;
    justify-content: center;
  }
}
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
    font-size: 18px;
    font-weight: 700;
    line-height: 36px;
    border-bottom: 2px solid $links-color;
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
      background: left 5px / auto 29px no-repeat;
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
    resize: none;
  }
}

.input-tooltip {
  opacity: 0;
  position: absolute;
  left: 5%;
  font-size: 14px;
  line-height: 44px;
  color: #fff;
  background-color: $errors-color;
  padding: 0 20px;
  z-index: 9999;
  user-select: none;

  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-bottom-color: $errors-color;
  }

  &--showed {
    opacity: 1;
  }
}

</style>