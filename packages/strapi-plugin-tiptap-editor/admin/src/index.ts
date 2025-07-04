// import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
// import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

// export default {
//   register(app: any) {
//     app.addMenuLink({
//       to: `plugins/${PLUGIN_ID}`,
//       icon: PluginIcon,
//       intlLabel: {
//         id: `${PLUGIN_ID}.plugin.name`,
//         defaultMessage: PLUGIN_ID,
//       },
//       Component: async () => {
//         const { App } = await import('./pages/App');

//         return App;
//       },
//     });


//         app.customFields.register({
//       name: 'tiptap-editor',
//       type: 'richtext',
//       plugin: PLUGIN_ID,
//       icon: PluginIcon,
//       intlLabel: {
//         id: `${PLUGIN_ID}.customFields.tiptap-editor.label`,
//         defaultMessage: 'Tiptap Editor',  
//       },
//       description: {
//         id: `${PLUGIN_ID}.customFields.tiptap-editor.description`,
//         defaultMessage: 'A rich text editor based on Tiptap.',
//       },
//       components: {
//         Input: async () =>
//           import('./components/Input').then(module => ({
//             default: module.default,
//           })),
//       },
//       options: {
//         base: {
//           label: {
//             id: `${PLUGIN_ID}.customFields.tiptap-editor.options.base.label`,
//             defaultMessage: 'Base Options', 
//           },
//           description: {
//             id: `${PLUGIN_ID}.customFields.tiptap-editor.options.base.description`,
//             defaultMessage: 'Base options for the Tiptap editor.',
//           },
//         },
//         advanced: {
//           label: {
//             id: `${PLUGIN_ID}.customFields.tiptap-editor.options.advanced.label`,
//             defaultMessage: 'Advanced Options',
//           },
//           description: {
//             id: `${PLUGIN_ID}.customFields.tiptap-editor.options.advanced.description`,
//             defaultMessage: 'Advanced options for the Tiptap editor.',
//           },
//         },
//         toolbar: {
//           label: {
//             id: `${PLUGIN_ID}.customFields.tiptap-editor.options.toolbar.label`,
//             defaultMessage: 'Toolbar Options',
//           },
//           description: {
//             id: `${PLUGIN_ID}.customFields.tiptap-editor.options.toolbar.description`,
//             defaultMessage: 'Toolbar options for the Tiptap editor.',
//           },
//         },
//       },
//     });
//   },

//   async registerTrads({ locales }: { locales: string[] }) {
//     return Promise.all(
//       locales.map(async (locale) => {
//         try {
//           const { default: data } = await import(`./translations/${locale}.json`);

//           return { data, locale };
//         } catch {
//           return { data: {}, locale };
//         }
//       })
//     );
//   },
// };


export default {
  bootstrap() {
    // This method is called when the plugin is loaded
    // You can perform any initialization logic here
  },
  async register(app: any): Promise<void> {
    app.customFields.register({
      name: 'tiptap-editor',
      type: 'richtext',
      pluginId: PLUGIN_ID,
      icon: PluginIcon,
      intlLabel: {
        id: `${PLUGIN_ID}.label`,
        defaultMessage: 'CKEditor 5',
      },
      intlDescription: {
        id: `${PLUGIN_ID}.description`,
        defaultMessage: 'The advanced rich text editor. (Community Edition)',
      },
      components: {
        Input: async () =>
          import('./components/Input').then(module => ({
            default: module.default,
          })),
      },
    });
  },
};
