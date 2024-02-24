type detailType = { icon: any; title: string; value?: string };
type BuilderDataType = {
  image: any;
  imageTag?: string;
  name: string;
  description?: string;
  mainHighlight?: Array<{ title: string; description: string }>;
  mainHighlightList?: Array<{ rating: number; title: string }>;
  whylove?: Array<string>;
  rating?: number;
  tags?: Array<string>;
  price?: number;
  sequence?: number;
  bestValue?: boolean;
  bestChoise?: boolean;
  discount?: number;
};

export type { detailType, BuilderDataType };
