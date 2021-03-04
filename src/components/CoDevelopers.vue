<!--template-->
<template lang="html">
  <ul class="developers">
    <li v-for='user in users' class="developers__item" ><!--v-bind:class="{ 'userConNombre': user.name }"-->
      <co-developer
        v-bind:avatar='user.avatar_url'
        v-bind:name='user.name'
        v-bind:login='user.login'
        v-bind:email='user.email'
        v-bind:location='user.location'
        v-bind:company='user.company'
        v-bind:repos='user.public_repos'
        v-bind:gists='user.public_gists'
      ></co-developer>
    </li>
  </ul>
</template>

<!--scripts-->
<script>
import CoDeveloper from './CoDeveloper'
import http from 'axios'
// import mocks from '@/mocks/users.js'

export default {
  name: 'CoDevelopers',
  data () {
    return {
      // users: mocks
      users: []
    }
  },
  mounted () {
    console.log('CoDevelopers montado')
    // this.getTopUsers()
    this.getTopUserAxios()
  },
  methods: {
    // fetch
    getTopUsers () {
      return fetch(
        `${process.env.API}search/users?q=language:javascript&order=desc&per_page=15`,
        {
          headers: {
            'Authorization': `token ${process.env.TOKEN}`
          }
        }
      )
        .then(response => response.json())
        .then(response => response.items)
        .then(users => users.map(user =>
          fetch(
            `${process.env.API}users/${user.login}`,
            {
              headers: {
                'Authorization': `token ${process.env.TOKEN}`
              }
            }
          )
            .then(response => response.json())
        ))
        .then(response => Promise.all(response))
        .then(users => {
          this.users = users
        })
    },
    // axios
    getTopUserAxios () {
      return http({
        method: 'GET',
        url: `${process.env.API}search/users`,
        params: {
          q: 'language:javascript',
          order: 'desc',
          per_page: 15
        },
        headers: {
          'Authorization': `token ${process.env.TOKEN}`
        }
      })
        .then(response => response.data)
        .then(response => response.items)
        .then(users => users.map(user =>
          http({
            method: 'GET',
            url: `${process.env.API}users/${user.login}`,
            headers: {
              'Authorization': `token ${process.env.TOKEN}`
            }
          })
            .then(response => response.data)
        ))
        .then(response => Promise.all(response))
        .then(users => {
          this.users = users
        })
    }
  },
  components: {
    CoDeveloper
  }
}
</script>

<!--estilos-->
<style lang="css" scoped>
  @import '../assets/css/colors.css';
  @import '../assets/css/mixins.css';
  .userConNombre {
    font-weight: 900;
  }
  
  .developers {
    overflow-x: none;
    overflow-y: auto;
    & .developers__item {
      position: relative;
    }
    & .developers__item::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 5%;
      width: 90%;
      height: 90%;
    }
    & .developer {
      padding: 1rem 2rem;
    }
  }
  
</style>