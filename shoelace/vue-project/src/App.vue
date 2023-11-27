<template>
    <div class="container">
        <sl-switch>Switch</sl-switch>

        <h1>QR code generator</h1>

        <sl-input
            maxlength="255"
            clearable
            label="Value"
            v-model="qrCode"
        ></sl-input>

        <sl-qr-code :value="qrCode"></sl-qr-code>
        <sl-button>Button</sl-button>

        <sl-dropdown>
            <sl-button slot="trigger" caret>Dropdown</sl-button>
            <sl-menu>
                <sl-menu-item>Dropdown Item 1</sl-menu-item>
                <sl-menu-item>Dropdown Item 2</sl-menu-item>
                <sl-menu-item>Dropdown Item 3</sl-menu-item>
                <sl-divider></sl-divider>
                <sl-menu-item type="checkbox" checked>Checkbox</sl-menu-item>
                <sl-menu-item disabled>Disabled</sl-menu-item>
                <sl-divider></sl-divider>
                <sl-menu-item>
                    Prefix
                    <sl-icon slot="prefix" name="gift"></sl-icon>
                </sl-menu-item>
                <sl-menu-item>
                    Suffix Icon
                    <sl-icon slot="suffix" name="heart"></sl-icon>
                </sl-menu-item>
            </sl-menu>
        </sl-dropdown>
    </div>
</template>

<script setup>
import { ref } from "vue";

const qrCode = ref();
</script>

<style>
.container {
    max-width: 400px;
    margin: 0 auto;
}

sl-input {
    margin: var(--sl-spacing-large) 0;
}
</style>
