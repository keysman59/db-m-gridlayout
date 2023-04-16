<template>
  <v-app>
    <Aside>

    </Aside>
    <Header>

    </Header>
		<v-main>
			<v-fade-transition>
				<router-view/>
			</v-fade-transition>
		</v-main>
  </v-app>
</template>

<script>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
			Header,
			Aside,
  }
};
</script>
