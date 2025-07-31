<template>
  <div class="w-full">
    <!-- Label -->
    <label
      v-if="label"
      class="block mb-1 text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>

    <!-- Select -->
    <select
      :value="modelValue"
      @change="handleChange"
      :disabled="disabled"
      :multiple="multiple"
      :class="[
        'w-full rounded-lg border border-gray-300 px-4 py-2 transition',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
        { 'bg-gray-100 text-gray-500 cursor-not-allowed': disabled || readonly },
        { 'h-auto': multiple }
      ]"
      :style="multiple ? 'min-height: 40px' : ''"
    >
      <!-- placeholder || multiple -->
      <option
        v-if="placeholder && !multiple"
        disabled
        value=""
        hidden
      >
        {{ placeholder }}
      </option>

      <!-- Option list -->
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
  label: String,
  placeholder: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'change'])

function handleChange(event) {
  if (props.readonly) {
    event.preventDefault()
    return
  }

  const selected = props.multiple
    ? Array.from(event.target.selectedOptions).map((opt) => opt.value)
    : event.target.value

  emit('update:modelValue', selected)
  emit('change', selected)
}
</script>
