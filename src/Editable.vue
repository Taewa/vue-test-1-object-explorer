<template>
    <section id="editable">
        <div class="val-area">
            <div class="readonly"
                 v-on:click="toggleValEdit(editableData)"
                 v-if="!valEdit">

                <span>{{editableData}}</span>
            </div>

            <div class="edit" v-else>
                <input type="text" v-model="internalEditable">
                <button type="button" v-on:click="updateVal()">confirm</button>
                <button type="button" v-on:click="cancel();">cancel</button>
            </div>

        </div>

    </section>
</template>


<script>

    export default {
        name: 'editable',

        props: [
            'editableData'
        ],

        data () {
            return {
                valEdit: false,
                storedVal: null,
                internalEditable: this.editableData
            }
        },

        methods: {
            toggleValEdit: function (storedVal) {
                this.valEdit = !this.valEdit;
                this.storedVal = storedVal;
            },

            updateVal: function () {
                this.$emit('updateVal', {
                    newVal : this.internalEditable,
                    oldVal : this.editableData
                });
                this.toggleValEdit();
            },

            cancel: function() {
                this.toggleValEdit();

                if(!this.valEdit){
                    this.internalEditable = this.editableData;
                }
            }
        }
    }


</script>


<style lang="scss">
    #editable {
        display: inline-block;
        input {
            background: #ffffc8;
            border: none;
            padding: 5px;
            font-size: 14px;
            display: inline-block;
        }
    }
</style>


