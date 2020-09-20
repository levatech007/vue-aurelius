<template>
  <div>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="formatted"
        type="text"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="value"
          start-weekday="1"
          button-only
          right
          locale="et-EE"
          calendarLocale= "et-EE"
          aria-controls="example-input"
          @context="onContext"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "DatePicker",
  props: {
    date: String
  },
  data() {
    return {
      value: this.date,
      formatted: '',
      selected: '',
    }
  },
  methods: {
    onContext(ctx) {
      this.formatted = ctx.selectedFormatted
      this.selected = ctx.selectedYMD
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
