<template>
    <div>
        <div class="dashboard-header">
            <nav class="navbar navbar-expand-lg bg-white fixed-top">
                <a class="navbar-brand" href="index.html">Concept</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto navbar-right-top">
                        <li class="nav-item">
                            <div id="custom-search" class="top-search-bar">
                                <input class="form-control" type="text" placeholder="Search..">
                            </div>
                        </li>
                        <li>
                            <v-select class="style-chooser" :components="{OpenIndicator}" placeholder="Select the locale!" label="select" v-model="selected" :options="this.locales" @input="handleChangeLanguage(selected)" ></v-select>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        locales : {
            type : Array
        }
    },
    data() {
        return {
            selected: '',
            OpenIndicator: {
                render: createElement => createElement('span', {class: {'toggle': true}}),
            },
        }
    },
    methods: {
        handleChangeLanguage(value) {
            this.$emit('changeLang', value);
        }
    },
    mounted() {
        
    },
}
</script>

<style scoped>
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: #dfe5fb;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
    display: none;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
    bottom: 0%;
  }
</style>