<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="header-wrapper">
        <div class="title">
          <NavLink link="/" class="home-link">
            <img
              v-if="$site.themeConfig.logo"
              class="logo"
              :src="$withBase($site.themeConfig.logo)"
              :alt="$siteTitle"
            />
          </NavLink>
        </div>
        <div class="header-links">
          <ul v-if="$themeConfig.nav" class="nav">
            <li
              v-for="item in $themeConfig.nav"
              :key="item.text"
              class="nav-item"
            >
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </li>
          </ul>
          <div class="header-button-right">
            <a :href="$themeConfig.navBtn.link" class="btn">{{
              $themeConfig.navBtn.text
            }}</a>
          </div>
          <!-- <SearchBox> /> -->
          <Feed />
        </div>
      </div>
    </header>
  </section>
</template>

<script>
import SearchBox from '@SearchBox';
import Feed from './Feed';

export default {
  components: { SearchBox, Feed },
};
</script>

<style lang="stylus">
@import '~@app/style/config'

#header
  z-index 12
  position fixed
  top 0
  width 100vw
  height $headerHeight
  box-sizing border-box
  background-color $headerBgColor
  padding 10px 32px 20px
  margin auto
  box-shadow 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05)
  transition all 1s cubic-bezier(0.25, 0.8, 0.25, 1)

  ol, ul
    list-style none
    margin 0
    padding 0

  ul
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 0 0 50%;
    justify-content: center;
    align-content: center;
    margin-left: auto;

  &:hover
    box-shadow 0 5px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.1)
  .logo
    height $navbarHeight - .8rem
    min-width $navbarHeight - 1rem
    // margin-right 0.8rem
    margin-bottom 0.2rem
    vertical-align top

// border-bottom 5px solid lighten(#3eaf7c, 50%)
.header-wrapper
  line-height 40px
  height 40px
  text-align center

  .title
    /* flex 0 0 200px */
    font-size 30px
    margin 0
    letter-spacing 2px
    display block
    text-transform uppercase

    a
      color $darkTextColor
      font-weight bold
      text-decoration none

  .header-links
    flex 1
    display flex
    justify-content center
    align-items center

    .nav
      flex 0 0 auto
      display flex
      margin 0

      .nav-item
        margin-left 20px
        display inline-block

        a
          font-size 20px
          font-weight 300
          // color lighten(#3eaf7c, 30%)
          text-decoration none
          transition color 0.3s

    .header-button-right
      line-height: initial;
      flex: 0 1 25%;
      max-width: 25%;

    .search-box
      margin-left 20px

      input
        border-radius 5px
        transition all 0.5s
        border 1px solid #cecece

        &:hover
          border 1px solid $accentColor
          box-shadow 0 0 5px $accentColor

      .suggestions
        border 1px solid $darkBorderColor
        top 40px
        right 0

        a
          color $darkTextColor
          text-decoration none

          &.focused
            color $accentColor

@media (max-width: $MQMobile)
  #header
    display none

  .header-wrapper
    flex-direction column

    .header-right-wrap
      display none
</style>
