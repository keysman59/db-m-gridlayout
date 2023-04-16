<template>
  <v-navigation-drawer
		:permanent="true"
		:mini-variant="$vuetify.breakpoint.smAndDown ?
			$vuetify.breakpoint.smAndDown : isAsideMini
		"
		app
		color="secondary"
	>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Aside',

    data: () => ({

    }),
  }
</script>
