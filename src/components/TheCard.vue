<script>
import IconSingleUserAddPlus from "@/components/icons/IconSingleUserAddPlus.vue";
import IconBuildingCityTown from "@/components/icons/IconBuildingCityTown.vue";
import IconDocumentsFileCertificate from "@/components/icons/IconDocumentsFileCertificate.vue";
import IconChevronRight from "@/components/icons/IconChevronRight.vue";

export default {
  components: {
    IconSingleUserAddPlus,
    IconBuildingCityTown,
    IconDocumentsFileCertificate,
    IconChevronRight,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <article class="card">
    <p class="card__title">{{ title }}</p>
    <div class="card__body">
      <div class="card__row">
        <div class="card__button">
          <p>Clientes cadastrados</p>
          <div class="item">
            <IconBuildingCityTown class="icon" />
            <span class="counter">126</span>
            <span class="plus">+23</span>
          </div>
        </div>
        <div class="card__button management">
          <button>
            <IconSingleUserAddPlus class="icon" />
          </button>
          <div class="flex">
            <p>Gerenciar clientes</p>
            <IconChevronRight />
          </div>
        </div>
      </div>
      <p class="card__subtitle">Certificados digitais</p>
      <div class="card__row">
        <div class="card__button">
          <ul>
            <li>118 integrados</li>
            <li>36 vencem em breve</li>
            <li>3 vencidos</li>
          </ul>
        </div>
        <div class="card__button management">
          <button>
            <IconDocumentsFileCertificate class="icon" />
          </button>
          <div class="flex">
            <p>Gerenciar certificados</p>
            <IconChevronRight />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 614px;
  border-radius: 16px;
  padding: 16px;
  background-color: white;
  @media (min-width: 768px) {
    padding: 36px;
  }
  @media (prefers-color-scheme: dark) {
    background-color: var(--vt-c-black-mute);
    color: var(--color-text-on-component);
  }

  &__title {
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -1%;
    font-weight: 600;
    color: var(--color-heading);
  }

  &__subtitle {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -1%;
    //TODO: criar e usar variável em _base.scss
    color: #475569;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    gap: 10px;
    flex-wrap: wrap;

    @media (min-width: 580px) {
      gap: 16px;
      flex-wrap: nowrap;
    }
    @media (min-width: 768px) {
      gap: 33px;
      flex-wrap: wrap;
    }
  }

  &__button {
    outline: 1px solid var(--vt-c-divider);
    border-radius: 16px;
    padding: 24px;
    background-color: #f8fafc;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 8px;
    column-gap: 30px;
    @media (min-width: 580px) {
      flex-direction: column;
      max-width: 240px;
      align-items: flex-start;
      &.management {
        max-width: 269px;
      }
    }
    &.management {
      background: #e2e8f0;
    }

    button {
      width: 40px;
      height: 40px;
      border: transparent;
      border-radius: 12px;
      background-color: var(--vt-c-white-pure);
    }

    .icon {
      //TODO: criar e usar variável em _base.scss
      color: #64748b;
    }

    .item {
      display: flex;
      column-gap: 8px;
    }

    li {
      position: relative;
      display: flex;
      align-items: center;
      column-gap: 15px;
      &::before {
        content: "";
        width: 8px;
        height: 8px;
        display: block;
        border-radius: 100%;
        background-color: var(--vt-c-yellow);
        // position: absolute;
        // top: 0;
        // left: 0;
      }
      &:first-of-type {
        &::before {
          background-color: var(--vt-c-green);
        }
      }
      &:last-of-type {
        &::before {
          background-color: var(--vt-c-red);
        }
      }
    }

    .plus {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: -1%;
      color: var(--text-brand-contrast);
    }
  }
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
