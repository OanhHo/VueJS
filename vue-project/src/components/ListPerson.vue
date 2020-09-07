<template>
    <div id="list-persons">
        <div class="panel panel-default">
            <div class="panel-heading my-person">
                  <h3 class="panel-title">My Person List<span class="person-length" v-if="persons.length > 0">{{persons.length}}</span></h3>
            </div>
            <div class="panel-body">
                <ul class="list-group" 
                    name="custom-classes-transition"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight"
                    is="transition-group"
                >
                    <li class="list-group-item" v-for="(person, index) in persons" v-bind:key="index">
                        <img src="http://lazi.vn/files/large/5a64450874df215" alt="" width="53">
                        {{person.body}}
                        <div class="btn-group">
                            <button type="button" @click="edit(person)" class="btn btn-default btn-sm" href="#edit" role="button" data-toggle="modal">
                            <span class="glyphicon glyphicon-edit"></span> Edit
                            </button>
                            <button type="button" @click="complete(person)" class="btn btn-success btn-sm">
                            <span class="glyphicon glyphicon-ok-circle"></span> Complete
                            </button>
                            <button type="button" @click="remove(person)" class="btn btn-danger btn-sm">
                            <span class="glyphicon glyphicon-remove-circle"></span> Remove
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>    
    </div>
</template>
<script>
    export default{
        name: "ListPerson",
        methods: {
            edit(person) {
                this.$store.dispatch('editPerson', person)
            },
            complete(person) {
                this.$store.dispatch('completePerson', person)
            },
            remove(person) {
                this.$store.dispatch('removePerson', person)
            }
        },
        computed: {
            persons() {
                return this.$store.getter.persons
            },
            newPerson() {
            	return this.$store.getter.newPerson
            }
        }
    }
</script>
<style>
    .btn-group{
        float: right;
    }
</style>