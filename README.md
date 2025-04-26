
# Angular Resume Template

Currículum Vitae desarrollado en Angular, con un diseño minimalista, responsivo y configurable mediante un archivo externo. Ideal para usar como sitio personal o como base para construir un portafolio profesional.

## 🚀 Características

- ⚡ Interfaz centrada y limpia
- 🎨 Fondo con gradiente animado
- ⌨️ Animación de máquina de escribir en el título
- 🔧 Contenido configurable desde archivo `text.config.ts`
- 🔗 Enlace a perfil de LinkedIn con ícono SVG
- 📱 Diseño responsive

## 🛠️ Instalación

```bash
git clone https://github.com/tu-usuario/angular-resume-template.git
cd angular-resume-template
npm install
```

## ▶️ Uso

1.  Copia el archivo de plantilla:
```bash
cp src/app/text.config.template.ts src/app/text.config.ts
```
2.  Personalízalo con tu nombre, título, y enlaces personales:
```ts
export const TextConfig = {
  name: 'Tu Nombre',
  title: 'Tu Profesión',
  linkedinUrl: 'https://www.linkedin.com/in/tu-perfil'
};
```
3.  Inicia la app:
```bash
ng serve
```

## 📁 Estructura de archivos

```css
src/
├── app/
│   ├── text.config.ts            ← tu archivo personalizado (ignorado por Git)
│   ├── text.config.template.ts   ← plantilla base incluida en el repo
│   ├── app.component.html        ← estructura del CV
│   ├── app.component.scss        ← estilos personalizados
│   └── app.component.ts          ← integración con config
├── assets/
│   └── linkedin-icon.svg         ← ícono de LinkedIn
```

## 📄 Licencia

MIT © @fredwinrosales