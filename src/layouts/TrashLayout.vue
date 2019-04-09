<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="gradient">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
        />
        <q-toolbar-title>
          Trash
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="more_vert"
        >
          <q-menu persistent auto-close>
            <q-list style="min-width: 100px">
              <q-item clickable @click="onEmptyTrashClick">
                <q-item-section avatar>
                  <q-icon name="delete"/>
                </q-item-section>
                <q-item-section>
                  Empty Trash
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>
          Navigation
        </q-item-label>
        <q-item clickable to="/notes">
          <q-item-section avatar>
            <q-icon name="note" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Notes</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/trash">
          <q-item-section avatar>
            <q-icon name="delete" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Trash</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/settings">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'Layout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    onEmptyTrashClick () {
      this.$store.commit({ type: 'emptyTrash' })
    }
  }
}
</script>

<style lang="stylus">
@import '~quasar-variables'
.gradient
  headerGradient()
</style>