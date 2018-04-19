<template>
    <section id="tree">
        <div v-for="(val, key) in treeData">
            <!--In case val is an object-->
            <template v-if="isObject(val)">
                <div class="object-tree-area">
                    <span class="key">
                        <editable :editableData="key" v-on:updateVal="updateKey($event, treeData)"></editable>:
                    </span>
                    <tree :treeData="val"></tree>
                </div>
            </template>

            <!--In case val is NOT an object-->
            <template v-else>
                <div class="key-val-area">
                    <span class="key">
                        <editable :editableData="key" v-on:updateVal="updateKey($event, treeData)"></editable>:
                    </span>

                    <editable :editableData="val" v-on:updateVal="updateVal($event, treeData, key)"></editable>
                </div>
            </template>

        </div>

    </section>
</template>


<script>
    import Editable from './Editable.vue'
    export default {
        name: 'tree',
        props: [
            'treeData'
        ],
        components: {
            Editable
        },
        computed: {},
        data () {
            return {
//                internalData: Object.assign({}, this.treeData),
                valEdit: false,
                storedVal: null
            }
        },
        methods: {
            isObject: function (val) {
                return val.constructor.name === "Object";
            },

            toggleValEdit: function (storedVal) {
                this.valEdit = !this.valEdit;
                this.storedVal = storedVal;
            },

            updateKey: function (keys, obj) {
                const newKey = keys.newVal;
                const oldKey = keys.oldVal;

                if (newKey === oldKey) return;

                const val = obj[oldKey];

                obj[newKey] = val;
                obj[newKey] = obj[oldKey];

                delete obj[oldKey];

                this.$forceUpdate();

            },

            updateVal: function (vals, obj, key) {
                obj[key] = vals.newVal;
            },
        }
    }


</script>


<style lang="scss">
    #tree {
        text-align: left;
        padding-left: 24px;

        .key {
            display: inline-block;
            padding: 1px 0px;
            color: #000;
            font-weight: bold;
        }

        .val-area {
            display: inline-block;
            color: #41b882;
            font-weight: bold;
        }

        input {
            background: #ffffc8;
            border: none;
            padding: 5px;
            font-size: 14px;
            display: inline-block;
        }
    }
</style>


