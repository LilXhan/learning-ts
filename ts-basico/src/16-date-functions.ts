import { subDays, format } from 'date-fns';
import { es } from 'date-fns/locale';

const date = new Date(1998, 1, 28);
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd', {locale: es})

console.log(str);