const BODY = document.body;

const EFFECTS = [
  {
    idName: 'effect-chrome',
    filterType: 'grayscale',
    minValue: 0,
    maxValue: 1,
    unit: '',
    stepSlider: 0.1,
    className: 'effects__preview--chrome'
  },
  {
    idName: 'effect-sepia',
    filterType: 'sepia',
    minValue: 0,
    maxValue: 1,
    unit: '',
    stepSlider: 0.1,
    className: 'effects__preview--sepia'
  },
  {
    idName: 'effect-marvin',
    filterType: 'invert',
    minValue: 0,
    maxValue: 100,
    unit: '%',
    stepSlider: 1,
    className: 'effects__preview--marvin'
  },
  {
    idName: 'effect-phobos',
    filterType: 'blur',
    minValue: 0,
    maxValue: 3,
    unit: 'px',
    stepSlider: 0.1,
    className: 'effects__preview--phobos'
  },
  {
    idName: 'effect-heat',
    filterType: 'brightness',
    minValue: 1,
    maxValue: 3,
    unit: '',
    stepSlider: 0.1,
    className: 'effects__preview--heat'
  }
];

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export {BODY, EFFECTS, FILE_TYPES};
