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
          v-if="selectedNoteIds.length <= 0"
        />
        <q-toolbar-title v-if="selectedNoteIds.length <= 0">
          {{ $t('appTitle') }}
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="close"
          @click="resetHighlighted"
          v-if="selectedNoteIds.length > 0"
        />

        <q-space />

        <q-btn
          flat
          dense
          round
          icon="more_vert"
          v-if="selectedNoteIds.length > 0"
        >
          <q-badge color="red" floating transparent>
            {{ selectedNoteIds.length }}
          </q-badge>

          <q-menu auto-close>
            <q-list style="min-width: 100px">
              <q-item clickable @click="onCopySelectedClick">
                <q-item-section avatar>
                  <q-icon name="file_copy" />
                </q-item-section>
                <q-item-section>
                  {{ $t('menuItem.copy') }}
                </q-item-section>
              </q-item>
              <q-item clickable @click="onDeleteSelectedClick">
                <q-item-section avatar>
                  <q-icon name="delete" />
                </q-item-section>
                <q-item-section>
                  {{ $t('menuItem.delete') }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>
          {{ $t('navigation.title') }}
        </q-item-label>
        <q-item clickable to="/notes">
          <q-item-section avatar>
            <q-icon name="note" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('navigation.notes') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/trash">
          <q-item-section avatar>
            <q-icon name="delete" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('navigation.trash') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/settings">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('navigation.settings') }}</q-item-label>
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
// import { openURL } from 'quasar';
import { v4 as uuidv4 } from 'uuid';

import { useNoteStore } from '../stores/note';
const noteStore = useNoteStore();

export default {
  name: 'NotesLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      notes: noteStore.getAllNotes,
    };
  },
  methods: {
    openURL,
    onAddNoteClick() {
      this.$router.push('/notes/detail/' + uuidv4());
    },
    onCopySelectedClick() {
      this.$store.commit({
        type: 'copyNotes',
        noteIds: this.selectedNoteIds,
      });
    },
    onDeleteSelectedClick() {
      this.$store.commit({
        type: 'removeNotes',
        noteIds: this.selectedNoteIds,
      });
    },
    resetHighlighted() {
      this.notes.forEach((note) => {
        if (note.highlighted) {
          note.highlighted = false;
        }
      });
    },
  },
  computed: {
    selectedNoteIds: function () {
      let selectedNoteIds = [];

      this.notes.forEach((note) => {
        if (note.highlighted) {
          selectedNoteIds.push(note.id);
        }
      });

      return selectedNoteIds;
    },
  },
};
</script>

<!--<style lang="scss" scoped>-->
<!--// $-->
<!---->
<!--.gradient {-->
<!--  @extend headerGradient-->
<!--}-->
<!--</style>-->
