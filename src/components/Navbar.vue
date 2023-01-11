<template>
  <nav>
    <div>
        <p>Hey there, displayname</p>
        <p class="email"> Currently logged in as EMAIL</p>
    </div>
    <button @click="handleClick">Log Out</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'

export default {
 setup() {
  const { logout , error } = useLogout()

  const handleClick = async () => {
      await logout()
      if(!error.value) {
        console.log('User logged out');
      }
  }

  return { handleClick , error }
 }
}
</script>

<style>

</style>