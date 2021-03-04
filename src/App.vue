<!--template-->
<template lang="pug" src="./App.pug"></template>

<!--scripts-->
<script>
import CoLogo from './components/CoLogo'
import CoSearch from './components/CoSearch'
import CoBookmarks from './components/CoBookmarks'

export default {
  name: 'CoApp',
  data () {
    return {
      show: false
    }
  },
  components: {
    CoLogo,
    CoSearch,
    CoBookmarks,
    // Componente CoDevelopers asíncrono
    CoDevelopers: () => ({
      component: import('./components/CoDevelopers'),
      delay: 400,
      timeout: 5000
    })

  },
  methods: {
    onSearch (searchCriteria) {
      console.log('Search', searchCriteria)
      this.show = true
    }
  }
}
</script>

<!--estilos-->
<style lang='css'>
  @import 'assets/css/reset.css';
  @import 'assets/css/global.css';
</style>
<!--**-->
<style lang='css' src='./App.css' scoped></style>
