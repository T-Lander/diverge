interface Window {
  require: NodeRequire;
}

interface Project {
  id: string;
  name: string;
  content: DialogNode[];
}

interface Actor {
  id: string;
  name: string;
  image?: string;
}

interface DialogNode {
  id: string;
  type: string;
}

interface StartDialogNode extends DialogNode {
}

interface EndDialogNode extends DialogNode {
}

interface TextDialogNode extends DialogNode {
  text: string;
  actors?: Actor[];
  next: string;
}

interface ChoiceDialogNode extends DialogNode {
  text: string;
  actors?: Actor[];
  choices: Choice[];
}

interface Choice {
  text: string;
  next: string;
}
