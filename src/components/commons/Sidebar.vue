<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../../assets/img/favicon-32x32.png" alt="logo" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right </span>
      </button>
    </div>
    <h3>メニュー</h3>
    <div class="menu">
      <router-link class="button" active-class="active" exact to="/">
        <span class="material-icons" >home</span>
        <span class="text" v-if="is_expanded">ホーム</span>
        
      </router-link>

      <!-- <router-link class="button" active-class="active" to="/weather">
        <span class="material-icons">flood</span>
        <span class="text" v-if="is_expanded">天気</span>
      </router-link> -->
      <router-link class="button" active-class="active" to="/">
        <span class="material-icons">share</span>
        <span class="text" v-if="is_expanded">共通</span>
      </router-link>

      <div @click="handleDiv($event), toggle($event)" class="button cursor-pointer">
        <TieredMenu ref="menu" :model="MENU" popup/>
        <span class="material-icons">foundation</span>
        <span class="text" v-if="is_expanded">住宅資材事業部</span>
      </div>

      <div @click="handleDiv($event), toggle_housing_division($event)" class="button cursor-pointer">
        <TieredMenu ref="housing_division" :model="HOUSING_MATERIAL_DIVISION" popup/>
        <span class="material-icons">support</span>
        <span class="text" v-if="is_expanded">ビルダーズサポート事業部</span>
      </div>

      <div class="button cursor-pointer">
        <span class="material-icons">groups_2</span>
        <span class="text" v-if="is_expanded">エツサス事業部</span>
      </div>

      <div class="button cursor-pointer">
        <span class="material-icons">carpenter</span>
        <span class="text" v-if="is_expanded">製材事業部</span>
      </div>

      <!-- <router-link
        class="button"
        active-class="active"
        :to="{ name: 'general' }"
      >
        <span class="material-icons">view_quilt</span>
        <span class="text" v-if="is_expanded">全般</span>
      </router-link>
      <router-link class="button" active-class="active" :to="{ name: 'graph' }">
        <span class="material-icons">analytics</span>
        <span class="text" v-if="is_expanded">グラフ</span>
      </router-link> -->


      <!-- <router-link class="button" active-class="active" :to="{ name: 'diary' }">
        <span class="material-icons">auto_stories</span>
        <span class="text" v-if="is_expanded">日報</span>
      </router-link> -->

      <!-- Dropdown menu 1 -->
      
      <!-- <div class="button cursor-pointer">
        <span class="material-icons">apartment</span>
        <span class="text" v-if="is_expanded">全社共通</span>
      </div>

      <div class="button cursor-pointer">
        <span class="material-icons">account_balance_wallet</span>
        <span class="text" v-if="is_expanded">経営管理部</span>
      </div>
      <div class="button cursor-pointer">
        <span class="material-icons">engineering</span>
        <span class="text" v-if="is_expanded">メインテナンス</span>
      </div> -->
      

      <!-- Dropdown menu 2 -->
      <!-- <div @click="ToggleChildMenu(1)" class="button cursor-pointer">
        <span class="material-icons">forest</span>
        <span class="text" v-if="is_expanded">協力会社</span>
      </div> -->
      <!-- <router-link class="button" active-class="active" :to="{ name: 'diary' }">
        <span class="material-icons">auto_stories</span>
        <span class="text" v-if="is_expanded">日報</span>
      </router-link> -->


    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import { MENU, HOUSING_MATERIAL_DIVISION } from '~/utils/constants.js'
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const is_clicked = ref([]);
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};

const menu = ref(false);
const toggle = (event) => {
    menu.value.toggle(event);
};
const housing_division = ref(false);
const toggle_housing_division = (event) => {
  housing_division.value.toggle(event);
};

const handleDiv = (e) => {
  const removeRouterLinkDiv =document.querySelector('.router-link-exact-active')
  if (removeRouterLinkDiv) removeRouterLinkDiv.classList.remove('active')
  const ortherDiv = document.querySelector("div[class='button cursor-pointer active']");
  if (ortherDiv) ortherDiv.classList.remove('active');
  e.target.parentElement.classList.toggle('active');
}

</script>

<style lang="scss" scoped>
aside {
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: scroll;
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);
  transition: 0.2s ease-out;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
  display: none;
}
  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
      }

      &:hover {
        .material-icons {
          color: var(--primary);
        }
      }
    }
  }

  h3 {
    color: var(--grey);
    font-size: 1.1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    line-height: 0rem;
    opacity: 0;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      width: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      line-height: 0.5rem;
      overflow: hidden;
      white-space: nowrap;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover,
      &.active {
        background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }
    }

    .active {
      border-right: 5px solid var(--primary);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    h3 {
      opacity: 1;
    }

    .child-menu {
      margin-left: 2rem;
      background-color: var(--bg-child);
    }
  }
}
</style>

<style lang="scss">
.p-tieredmenu {
    min-width: 14rem !important;
    left: 55px !important;
}
</style>