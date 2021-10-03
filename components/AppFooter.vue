<template>
    <footer>
        <div class="footer-menu-wrapper">
            <div class="container">
                <div class="row">
                  <div class="col-12 col-md-4 footer-menu-column">
                      <ul class="footer-menu-list">
                        <li>
                          <router-link to="/">Home</router-link>
                        </li>
                        <li>
                          <router-link to="/products">Produtos</router-link>
                        </li>
                        <li>
                          <router-link to="">Footer Link</router-link>
                        </li>
                        <li>
                          <router-link to="">Footer Link</router-link>
                        </li>
                      </ul>
                  </div>
                  <div class="col-12 col-md-4 footer-menu-column">
                    <ul class="footer-menu-list">
                      <li>
                        <router-link to="">Footer Link</router-link>
                      </li>
                      <li>
                        <router-link to="">Footer Link</router-link>
                      </li>
                      <li>
                        <router-link to="">Footer Link</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-12 col-md-4 footer-menu-column">
                    <ul class="footer-menu-list">
                      <li>
                        <router-link to="">Footer Link</router-link>
                      </li>
                      <li>
                        <router-link to="">Footer Link</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright-wrapper">
            <div class="container">
                <p>All rights reserved © 2020 - By <a href="https://www.webcomum.com" target="_blank">Webcomum</a></p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name:'AppFooter'
}
</script>
