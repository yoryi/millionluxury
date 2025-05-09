/**
 * Utility function to format a date in the format "Viernes, 12 de Diciembre, 2025".
 *
 * @function formatDate
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 *
 * @example
 * ```tsx
 * import { formatDate } from "./utils";
 * 
 * const formattedDate = formatDate(new Date());
 * console.log(formattedDate); // "Viernes, 12 de Diciembre, 2025"
 * ```
 */

export const formatDate = (date: Date): string => {
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    const day = date.getDate();
    const year = date.getFullYear();
    const dayName = days[date.getDay()];
    const month = months[date.getMonth()];
    return `${dayName}, ${day} de ${month}, ${year}`;
  };
  