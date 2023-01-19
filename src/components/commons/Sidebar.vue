<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../../assets/img/favicon-32x32.png" alt="logo">
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right
        </span>
      </button>
    </div>
    <h3>メニュー</h3>
    <div class="menu">
      <router-link class="button" active-class="active" exact to="/">
        <span class="material-icons">home</span>
        <span class="text" v-if="is_expanded">ホーム</span>
      </router-link>
      <router-link class="button" active-class="active" to="/weather">
        <span class="material-icons">flood</span>
        <span class="text" v-if="is_expanded">天気</span>
      </router-link>
      <router-link class="button" active-class="active" :to='{ name: "general" }'>
        <span class="material-icons">view_quilt</span>
        <span class="text" v-if="is_expanded">全般</span>
      </router-link>
      <router-link class="button" active-class="active" :to='{ name: "graph" }'>
        <span class="material-icons">analytics</span>
        <span class="text" v-if="is_expanded">グラフ</span>
      </router-link>
      <router-link class="button" active-class="active" :to='{ name: "diary" }'>
        <span class="material-icons">auto_stories</span>
        <span class='text' v-if="is_expanded">日報</span>
      </router-link>

      <!-- Dropdown menu 1 -->
      <div @click="ToggleChildMenu(0)" class="button cursor-pointer">
        <span class="material-icons">foundation</span>
        <span class='text' v-if="is_expanded">住宅資材事業部</span>
      </div>

      <Transition name="appear">
        <div v-if="is_expanded && is_clicked[0]" class="child-menu">
          <router-link class="button h-10" active-class="active" :to='{ name: "diary" }'>
            <span class='text'>製造部</span>
          </router-link>
          <router-link class="button h-10" active-class="active" :to='{ name: "diary" }'>
            <span class='text'>営業部</span>
          </router-link>
        </div>
      </Transition>

      <!-- Dropdown menu 2 -->
      <div @click="ToggleChildMenu(1)" class="button cursor-pointer">
        <span class="material-icons">forest</span>
        <span class='text' v-if="is_expanded">製材事業部</span>
      </div>

      <Transition name="appear">
        <div v-if="is_expanded && is_clicked[1]" class="child-menu">
          <router-link class="button h-10" active-class="active" :to='{ name: "diary" }'>
            <span class='text'>生産課</span>
          </router-link>
          <router-link class="button h-10" active-class="active" :to='{ name: "diary" }'>
            <span class='text'>生産管理課</span>
          </router-link>
        </div>
      </Transition>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
const is_expanded = ref(localStorage.getItem('is_expanded') === 'true');
const is_clicked = ref([]);
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem('is_expanded', is_expanded.value)
}
const ToggleChildMenu = (n) => {
  is_clicked.value[n] ? is_clicked.value[n] = !is_clicked.value[n] :
    is_clicked.value[n] = true;
}
</script>

<style lang="scss" scoped>
aside {
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);
  transition: 0.2s ease-out;



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

.appear-enter-active,
.appear-leave-active {
  transition: all 0.2s ease-out;
}

.appear-enter-from,
.appear-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>