<template>
    <main class="whitebox" id="settings-page">
        <h3 class="title-h3 color-dark-blue text-center">{{ $t('admin.site_settings.tradingview') }} {{ $t('admin.site_settings.settings') }}</h3>

        <site-settings
                keys="TRADINGVIEW_USERNAME"></site-settings>
    </main>

</template>

<script>
    import SiteSettings from "./site-settings";

    export default {
        components: {
            SiteSettings,
            'site-settings': SiteSettings
        }
    }
</script>
