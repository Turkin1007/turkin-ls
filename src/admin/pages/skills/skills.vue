<template lang="pug">
section.about
  .page__container
    .page__header
      .page__columns
        h2.page-title Блок «Обо мне»
    .page__content
      ul.about__list
        li.about__item
          .card
            .skills-title
              input.skills__title.skills__title-new(placeholder="Название новой группы")
              .check
                button(type="submit").yes 
                button(type="submit").no 	
            .card__content
            .card__footer
              .add-new-skill__cell
                input.skills(placeholder="Новый навык")
              .add-new-skill__cell  
                input.skills-lvl(placeholder="0")
              .add-new-skill__cell
                button(type="submit").btn.btn--add.btn--big

        li.about__item
          .card
            .skills-title
              input.skills__title(placeholder="Frontend")
              .pen &#9998;
            .card__content
              ul.card-list
                li.card-item
                  .card-name HTML
                  .card-lvl 30%
                  .card-change
                    .pen &#9998;
                    .urn &#128465;
                li.card-item
                  .card-name CSS
                  .card-lvl 50%
                  .card-change
                    .pen &#9998;
                    .urn &#128465;
                li.card-item
                  .card-name JavaScript
                  .card-lvl 100%
                  .card-change
                    .pen &#9998;
                    .urn &#128465;
            .card__footer
              .add-new-skill__cell
                input.skills(placeholder="Новый навык")
              .add-new-skill__cell  
                input.skills-lvl(placeholder="0")
              .add-new-skill__cell
                button(type="submit").btn.btn--add.btn--big
</template>

<script>

</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.about {
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    @include tablets {
      flex-direction: column;
    }
  }

  &__item {
    flex-basis: calc(50% - 30px);
    margin-left: 30px;
    margin-bottom: 30px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
  }
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card__content {
  padding-top: 20px;
  height: 100%;
}

.card__footer {
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 40px;
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.card-list {
  display: flex;
  flex-direction: column;
  
}

.card-item {
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.card-name {
  width: 50%;
  font-weight: 700;
}

.card-lvl {
  font-weight: 600;
  padding: 20px 0;
}

.card-change {
  display: flex;
}

.skills-title {
  width: 90%;
  height: 100px;
  padding-bottom: 20px;
  padding-top: 30px;
  border-bottom: 1px solid #414c63;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.skills__title {
  width: 55%;
  margin-left: 20px;
  padding-bottom: 10px;
  font-weight: 700;
  font-size: 18px;
}

.skills__title-new {
  width: 55%;
  margin-left: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #414c63;
}

.skills {
  font-weight: 600;
  opacity: .4;
  border-bottom: 1px solid #414c63;
  margin-right: 10px;
}

.skills-lvl {
  border-bottom: 1px solid #414c63;
  opacity: .4;
  width: 50%;
}

.btn {
  margin-left: -50px;;
}

input {
  background: transparent;
  border: none;
}

button {
  background: transparent;
  border: none;
}

.btn--add:before {
    content: "+";
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-weight: 600;
    border-radius: 50%;
    font-size: 0.9375rem;
    width: 1.3125rem;
    height: 1.3125rem;
    color: #fff;
    background-image: -webkit-gradient(linear,left top,right top,from(#006aed),to(#3f35cb));
    background-image: linear-gradient(90deg,#006aed 0,#3f35cb);
}

.btn--add, .btn--add:before {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.btn--add.btn--big:before {
    font-size: 1.875rem;
    width: 2.5rem;
    height: 2.5rem;
}

.check {
  display: flex;
}

.yes {
  background-image: svg-load("tick.svg", fill=#00d70a);
  background-repeat: no-repeat;
  width: 15px;
  height: 12px;
  margin-right: 20px;
} 

.no {
  background-image: svg-load("cross.svg", fill=#bf2929);
  background-repeat: no-repeat;
  width: 14px;
  height: 12px;
}

.pen {
  transform: rotate(90deg);
  margin-right: 20px;
}

</style>