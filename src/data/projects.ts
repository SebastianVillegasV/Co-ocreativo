// Fuente de contenido del portafolio.
// Cada proyecto es una historia: logline, relato y piezas.
// Los textos de `story` son borradores editoriales — editar libremente.

export interface Project {
  slug: string;
  title: string;
  logline: string;
  kind: 'Fotografía' | 'Video' | 'Foto y video';
  meta: string[];
  cover: string;
  images: string[];
  youtube?: string;
  story: string[];
  credits: { label: string; value: string }[];
}

const img = (folder: string, base: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/assets/projects/${folder}/${base}-${i + 1}.jpg`);

export const projects: Project[] = [
  {
    slug: 'tigre-de-salon',
    title: 'Tigre de Salón',
    logline: 'De la Sierra Nevada a la mochila.',
    kind: 'Fotografía',
    meta: ['Fotografía documental', 'Sierra Nevada de Santa Marta'],
    cover: '/assets/projects/Tigre_JPG/Tigre-1.jpg',
    images: img('Tigre_JPG', 'Tigre', 15).slice(1),
    story: [
      'Toda mochila empieza mucho antes del tejido. Empieza en la montaña, en la lana, en unas manos que hilan mientras conversan.',
      'Seguimos ese hilo desde la Sierra Nevada hasta la ciudad: un registro documental de los lugares, los oficios y las personas que hay detrás de cada pieza.',
      'Sin poses ni puesta en escena. La historia ya estaba ahí — nuestro trabajo fue estar presentes cuando pasó.',
    ],
    credits: [
      { label: 'Proyecto', value: 'Tigre de Salón' },
      { label: 'Formato', value: 'Fotografía documental' },
      { label: 'Lugar', value: 'Sierra Nevada de Santa Marta, Colombia' },
      { label: 'Producción', value: 'Co-o creativo' },
    ],
  },
  {
    slug: 'finest-call',
    title: 'Finest Call',
    logline: 'El producto se bajó de la estantería y se puso a trabajar.',
    kind: 'Video',
    meta: ['Campaña', '2021', 'Lanzamiento de colección'],
    cover: '/assets/projects/Portadas/1_Bartender.jpg',
    images: [],
    youtube: 'Ud8Fpd9MHPQ',
    story: [
      'Un producto en estantería es información. Un bartender usándolo a toda velocidad es una historia.',
      'Para el lanzamiento de la colección llevamos la marca a la acción: el gesto del bartender, la disciplina del boxeador. Piezas para web y punto de venta que se sienten en movimiento aunque estén quietas.',
    ],
    credits: [
      { label: 'Cliente', value: 'Finest Call' },
      { label: 'Año', value: '2021' },
      { label: 'Formato', value: 'Campaña · Video y foto' },
      { label: 'Producción', value: 'Co-o creativo' },
    ],
  },
  {
    slug: 'trapiche',
    title: 'Trapiche',
    logline: 'Cada plano tenía que contar la historia solo.',
    kind: 'Video',
    meta: ['Video comercial', 'Punto de venta y redes'],
    cover: '/assets/projects/Portadas/3_Trapiche.jpg',
    images: [],
    youtube: 'XKACm94Yy6M',
    story: [
      'Un video diseñado para vivir en dos mundos: la pantalla del punto de venta, donde nadie tiene audio, y las redes, donde nadie tiene tiempo.',
      'La respuesta fue visual: planos que cuentan la historia por sí mismos, con o sin sonido, en tres segundos o en treinta.',
    ],
    credits: [
      { label: 'Cliente', value: 'Trapiche Argentina' },
      { label: 'Formato', value: 'Video comercial' },
      { label: 'Destino', value: 'Punto de venta · Redes' },
      { label: 'Producción', value: 'Co-o creativo' },
    ],
  },
  {
    slug: 'real-coco',
    title: 'Real Coco',
    logline: 'Lo real no necesita disfraz.',
    kind: 'Video',
    meta: ['Propuesta comercial', 'Lanzamiento'],
    cover: '/assets/projects/Portadas/2_CocoReal.jpg',
    images: [],
    youtube: 'EmOAYnjjqTc',
    story: [
      'Propuesta comercial para el lanzamiento de Real Coco: producto, luz y una idea simple contada sin adornos.',
    ],
    credits: [
      { label: 'Cliente', value: 'Real Coco' },
      { label: 'Formato', value: 'Propuesta comercial · Video' },
      { label: 'Producción', value: 'Co-o creativo' },
    ],
  },
  {
    slug: 'retratos',
    title: 'Retratos',
    logline: 'Nadie sale bien fingiendo.',
    kind: 'Fotografía',
    meta: ['Retrato corporativo', 'Web y LinkedIn'],
    cover: '/assets/projects/Portadas/4_Retratos.jpg',
    images: img('Retratos_JPG', 'Retratos', 8),
    story: [
      'Retratos naturales, sin poses forzadas, para equipos que quieren verse como son.',
      'Un banco de imágenes coherente con la identidad de la firma, hecho de gestos reales.',
    ],
    credits: [
      { label: 'Formato', value: 'Retrato corporativo' },
      { label: 'Destino', value: 'Web empresariales · LinkedIn' },
      { label: 'Producción', value: 'Co-o creativo' },
    ],
  },
  {
    slug: 'eventos',
    title: 'Foto reportajes',
    logline: 'Estar ahí cuando pasa.',
    kind: 'Fotografía',
    meta: ['Reportaje', 'Colombia', 'Varios clientes'],
    cover: '/assets/projects/Eventos_JPG/Eventos-1.jpg',
    images: img('Eventos_JPG', 'Eventos', 15).slice(1),
    story: [
      'Reportajes de eventos alrededor del país. Diferentes clientes, un mismo objetivo: contar con imágenes la mejor historia de la noche.',
    ],
    credits: [
      { label: 'Formato', value: 'Foto reportaje' },
      { label: 'Lugar', value: 'Colombia' },
      { label: 'Producción', value: 'Co-o creativo' },
    ],
  },
];

export const REEL_YOUTUBE_ID = 'kokPRT2amM0';
