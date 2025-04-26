
# Angular Resume Template

Currículum Vitae desarrollado en Angular, con un diseño minimalista, responsivo y ahora **más dinámico**, configurable a través de un archivo de entorno. Ideal para usar como sitio personal o como base para construir un portafolio profesional.

----------

🚀 **Características**  
⚡ Interfaz centrada y limpia  
🎨 Fondo con gradiente animado  
⌨️ Animación de máquina de escribir en el título  
🔧 Contenido y metadata configurables desde `environment.ts`  
🔗 Enlace a perfil de LinkedIn con ícono SVG  
🖼️ Imagen de previsualización para compartir en redes sociales  
📱 Diseño responsive adaptado a múltiples dispositivos  
🌐 Actualización de favicon para mayor personalización

----------

🛠️ **Instalación**
```bash
git clone https://github.com/tu-usuario/angular-resume-template.git
cd angular-resume-template
npm install
```
▶️ **Uso**

Personaliza tu contenido editando `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  name: 'Tu Nombre',
  title: 'Tu Profesión',
  description: 'Breve descripción de tu perfil profesional.',
  image: 'URL de tu imagen de previsualización',
  url: 'Tu URL personal o de portfolio',
  linkedinUrl: 'https://www.linkedin.com/in/tu-perfil'
};
```
Inicia la aplicación:
```bash
ng serve
```
📁 **Estructura de archivos**
```css
src/
├── app/
│   ├── app.component.html      ← estructura del CV
│   ├── app.component.scss      ← estilos personalizados
│   └── app.component.ts        ← integración con environment
├── assets/
│   ├── favicon.ico             ← favicon personalizado
│   ├── preview.jpg             ← imagen de previsualización
│   └── linkedin-icon.svg       ← ícono de LinkedIn
├── environments/
│   └── environment.ts          ← configuración dinámica
├── index.html                  ← metadatos generales

```
📄 **Licencia**  
MIT © [@fredwinrosales](https://www.linkedin.com/in/fredwin-rosales-22a85711/)