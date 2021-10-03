<template>
    <!-- <div class="app-menu" :class="{'light': theme=='light', 'white': theme=='white', 'dark': theme=='dark', 'big': height=='big', 'thin': height=='thin', 'fixedmenu': fixedmenu == true}">
        <div>
          <NuxtLink to="/"><AppLogo :theme = "theme"/></NuxtLink>
        </div>
        <div class="navlist text-right">
          <div class="d-none d-lg-flex navitem">
            <NuxtLink to='/inspiration' >INSPIRATIONS</NuxtLink>
          </div>
          <div class="d-none d-lg-flex navitem">
            <NuxtLink to='/collection' >COLLECTIONS</NuxtLink>
          </div>
          <div class="d-none d-lg-flex navitem">
            <NuxtLink to='/categories' >BRANDS</NuxtLink>
          </div>
          <div class="d-none d-lg-flex navitem">
            <NuxtLink to='/trends' >TRENDS</NuxtLink>
          </div>
          <div class="d-none d-lg-flex navitem">
            <NuxtLink to='/press-room' >PRESS ROOM</NuxtLink>
          </div>
          <div class="d-none d-lg-flex navitem">
            <NuxtLink to='/blog' >NEWS</NuxtLink>
          </div>
          <div class="selected d-none d-lg-flex navitem" >
            <NuxtLink to='/ebooks-catalogues' >EBOOKS & CATALOGUES</NuxtLink>
          </div>
          <div class="navitem">
            <SearchButton :theme="theme"/>
          </div>
        </div>
    </div>  -->
    <div>
  <b-navbar class="app-menu" toggleable="lg"  :class="{'light': theme=='light', 'white': theme=='white', 'dark': theme=='dark', 'big': height=='big', 'thin': height=='thin', 'fixedmenu': fixedmenu == true}">
    <b-navbar-brand href="/"><AppLogo :theme = "theme"/></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item ><NuxtLink to="/inspiration">INSPIRATIONS</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/collection">COLLECTIONS</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/categories">BRANDS</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/trends">TRENDS</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/">PRESS ROOM</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/blog">NEWS</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/ebooks-catalogues">EBOOKS & CATALOGUES</NuxtLink></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <SearchButton :theme="theme"/>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import AppLogo from '@/components/AppLogo';
import SearchButton from '@/components/basic/SearchButton';
export default {
    name: 'AppMenu',
    components: {
        AppLogo,
        SearchButton
    },
    props: ['theme', 'height', 'fixedmenu']
}
</script>

<style lang="scss">
.navbar.dark{
  div {
    ul {
      li {
        a {
          color: black !important;
        }
        a:hover {
          color: red !important;
        }
        a.nuxt-link-active {
          color: red !important;
        }
      }
    }
  }
}
.navbar.light{
  div {
    ul {
      li {
        a {
          color: white !important;
        }
        a:hover {
          color: red !important;
        }
        a.nuxt-link-active {
          color: red !important;
        }
      }
    }
  }
}
.navbar.white {
  div {
    ul {
      li {
        a {
          color: black !important;
        }
        a:hover {
          color: red !important;
        }
        a.nuxt-link-active {
          color: red !important;
        }
      }
    }
  }
}
.navbar {
  a {
    height: 100%;
    div {
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
}
.navbar {
  .navbar-brand {
    width: 15%;
    div {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
@media (max-width: 1350px) and (min-width: 974px){
  .navbar {
    padding-left: 1.5%;
    padding-right: 1.5%;
    div {
      ul {
        li {
          font-size: 12px;
        }
      }
    }
  }
}



</style>