import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    Link: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    seoDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    seoTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {};
}

export interface WebClasicCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_clasic_cards';
  info: {
    description: '';
    displayName: 'ClasicCard';
  };
  attributes: {
    centrado: Schema.Attribute.Boolean;
    Descripcion: Schema.Attribute.Text;
    Imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Titulo: Schema.Attribute.String;
  };
}

export interface WebContent extends Struct.ComponentSchema {
  collectionName: 'components_web_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    imageDescription: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    text4: Schema.Attribute.String;
  };
}

export interface WebDescripcion extends Struct.ComponentSchema {
  collectionName: 'components_web_descripcions';
  info: {
    description: '';
    displayName: 'Descripcion';
  };
  attributes: {
    descripcion1: Schema.Attribute.Text;
    descripcion2: Schema.Attribute.Text;
    desdePrecio: Schema.Attribute.String;
    precioSinFormato: Schema.Attribute.String;
    seccionPagina: Schema.Attribute.String;
    textoBoton: Schema.Attribute.String;
  };
}

export interface WebGlobal extends Struct.ComponentSchema {
  collectionName: 'components_web_globals';
  info: {
    description: '';
    displayName: 'global';
  };
  attributes: {
    deepLinks: Schema.Attribute.Component<'web.lista-atributo-valor2', true>;
    src: Schema.Attribute.String;
  };
}

export interface WebLanding extends Struct.ComponentSchema {
  collectionName: 'components_web_landings';
  info: {
    description: '';
    displayName: 'Landing';
    icon: 'stack';
  };
  attributes: {
    imagenfondo: Schema.Attribute.Media<'images'>;
  };
}

export interface WebListaAtributoValor extends Struct.ComponentSchema {
  collectionName: 'components_web_lista_atributo_valors';
  info: {
    description: '';
    displayName: 'ListaAtributoValor';
  };
  attributes: {
    atributo: Schema.Attribute.String;
    Submenu: Schema.Attribute.Component<'web.lista-atributo-valor2', true>;
    valor: Schema.Attribute.String;
  };
}

export interface WebListaAtributoValor2 extends Struct.ComponentSchema {
  collectionName: 'components_web_lista_atributo_valor2s';
  info: {
    description: '';
    displayName: 'ListaAtributoValor2';
  };
  attributes: {
    atributo: Schema.Attribute.String;
    valor: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'web.clasic-card': WebClasicCard;
      'web.content': WebContent;
      'web.descripcion': WebDescripcion;
      'web.global': WebGlobal;
      'web.landing': WebLanding;
      'web.lista-atributo-valor': WebListaAtributoValor;
      'web.lista-atributo-valor2': WebListaAtributoValor2;
    }
  }
}
