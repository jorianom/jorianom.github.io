# Política de Privacidad — AlDía

> **Esqueleto listo para publicar.** Completá los campos entre `[corchetes]`, subilo a una página pública (ej: `https://jorianom.github.io/aldia/privacidad/`) y pegá esa URL en la ficha de Play Store. No publiques la política en PDF: Google exige una página web accesible y sin estar desactualizada respecto al comportamiento real de la app.

**Última actualización:** `09/08/2026`

---

## 1. Responsable de la aplicación

- **Nombre de la app:** AlDía
- **Desarrollador:** John Jairo Riaño Martinez
- **Correo de contacto:** `rianosoftware.dev@gmail.com`
- **Disponible en:** Google Play

AlDía es una aplicación móvil de control personal de deudas ("lo que debo") y fiados ("lo que me deben"). No requiere cuenta, no tiene backend y funciona 100% sin conexión a internet para su uso normal.

---

## 2. Información que recopilamos y almacenamos

AlDía **no recopila ni almacena tus datos en servidores propios ni de terceros** para su funcionamiento. Toda la información que creás se guarda **únicamente en tu dispositivo** (en la base de datos local del celular).

Esta información es la que vos ingresás voluntariamente:

- **Deudas propias:** persona o entidad a la que debés, monto, fecha de vencimiento, recurrencia y estado.
- **Fiados / saldos por cobrar:** clientes o personas que te deben, movimientos de deuda y de pago, saldo y fechas.
- **Preferencias de la app:** recordatorios (días de anticipación, hora), preferencias de notificaciones y estado del tutorial/onboarding.

Datos técnicos del dispositivo (modelo, versión de Android) **no se recopilan automáticamente**: solo se usan puntualmente cuando vos mismo generás un reporte de error (ver sección 4).

---

## 3. Información que se envía a terceros (Gemini / Google AI)

AlDía tiene una función de **"Entrada rápida"** que interpreta en español frases que describís, por ejemplo: *"Le presté 50 mil a Pedro"*. La interpretación se resuelve primero con reglas locales en tu dispositivo.

**Solo cuando las reglas locales no logran interpretar la frase**, se envía el texto de esa frase (que puede contener nombres de personas, montos y fechas) a la **API de Gemini, un servicio de Google**, para estructurarla como deuda o fiado. Esta transmisión:

- Ocurre **únicamente en el momento en que usás la entrada rápida** y las reglas locales fallan.
- No envía tu lista de deudas, contactos, ni ningún otro dato del dispositivo.
- Está sujeta a la política de privacidad de Google (https://policies.google.com/privacy).

Si no usás la entrada rápida con Gemini, **no se envía ninguna información a Google ni a ningún otro servicio**.

---

## 4. Reporte de errores (envío manual)

Si la app muestra un error, podés optar por **enviar un reporte** al desarrollador. Ese envío:

- Es **totalmente voluntario y lo iniciás vos** desde el diálogo de error.
- Se hace con el **compartir del sistema** (email, WhatsApp u otra app que elijas), nunca en segundo plano.
- Incluye: descripción del error, datos técnicos del dispositivo (marca, modelo, versión de Android, versión de la app) y, opcionalmente, contexto del error.

Al compartir un reporte, el mensaje viaja a través de la app que elijas (por ejemplo, tu correo) y esa app aplica sus propias condiciones.

---

## 5. Cómo usamos la información

- **Deudas y fiados:** se muestran en pantalla (resumen, gestión, vencimientos), se usan para programar **recordatorios locales** y para el **widget de la pantalla de inicio** de Android. Nada de esto sale del dispositivo.
- **Notificaciones:** los recordatorios se generan y muestran localmente desde el celular.
- **Interpretación por Gemini:** solo para estructurar la frase que escribís (sección 3).

**AlDía no usa los datos para:** publicidad, perfiles de usuario, venta a terceros, estadísticas anónimas, ni análisis de comportamiento. **No hay SDK de analytics ni de anuncios** en la app.

---

## 6. Almacenamiento y seguridad

- Los datos viven en la base de datos local de tu dispositivo (Realm).
- No hay cuentas, ni sincronización, ni copias de seguridad en la nube.
- Al desinstalar la app se eliminan los datos locales del dispositivo.
- La app no solicita permisos innecesarios; los permisos que usa se detallan en la sección 8.

---

## 7. Sus derechos (Ley 1581 de 2012, Colombia)

Dado que tus datos residen en tu propio dispositivo y no en servidores, podés ejercer tus derechos directamente:

- **Acceso:** revisá tus datos dentro de la app.
- **Rectificación / actualización:** editá cualquier deuda o fiado desde la app.
- **Supresión:** borrá registros desde la app o eliminá la aplicación por completo.
- Para cualquier consulta o solicitud, escribinos a `[correo@ejemplo.com]` y responderemos a la brevedad.

---

## 8. Permisos que solicita la app y para qué

| Permiso | Motivo |
|---|---|
| Notificaciones | Mostrar los recordatorios de vencimiento que programás vos |
| Alarmas exactas / programar alarmas | Que los recordatorios suenen a la hora prevista (se habilita desde la configuración del teléfono) |
| Internet | **Solo** para la entrada rápida con Gemini (sección 3); el resto de la app funciona sin conexión |

---

## 9. Cambios en esta política

Si la app cambia la forma en que trata la información, actualizaremos esta política y la fecha de "Última actualización" al inicio del documento. Los cambios no serán retroactivos.

---

## 10. Contacto

Si tenés preguntas sobre esta política o sobre el manejo de tu información:

- **Correo:** `[correo@ejemplo.com]`

---

## Anexo — Cómo llenar el formulario "Seguridad de los datos" (Data Safety) de Play

Para que la ficha y esta política sean consistentes:

- **¿Recopila o comparte algún dato?** Sí → "Otra" (no identifica un tipo de los preseleccionados con claridad), porque el texto de la entrada rápida puede contener datos personales y se envía a Gemini. Si preferís la opción más conservadora, marcá lo que corresponda según las categorías.
- **Datos que se envían a terceros (Gemini/Google):** el texto de la frase de entrada rápida (datos personales/otro) solo cuando las reglas locales fallan.
- **Uso:** funcionalidad de la app.
- **Encriptación / eliminación:** los datos se eliminan al borrar la app; la transmisión a Gemini es HTTPS.
- **Política de privacidad:** pegá acá la URL pública de esta página.
- La app **no** comparte datos con terceros para publicidad ni análisis.

> **Pitfalls comunes que Google revisa y hay que evitar:** política con URL rota o inaccesible, política en PDF, política que no refleja el comportamiento real (por ej., declarar "no se recopila nada" cuando la entrada rápida usa Gemini), y no declarar los datos que recibe un tercero (Google). Si no hubiera transmisión a terceros, la declaración sería "no recopila datos".
