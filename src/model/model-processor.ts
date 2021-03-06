import { Model } from "../types/model-types";
import processLine from "./line-processor";
import processNodes from "./node-processor";

function processModel(text: string) {
  const model = new Model();

  const lines = text.split("\n");
  lines.forEach((x) => processLine(x, model));

  processNodes(model);
  console.log(model.states);

  model.maxDepthStart = [...model.nodes.values()].reduce((a, x) =>
    x.stats.height > a.stats.height ? x : a
  );

  if (model.states.length !== 0)
    model.maxDepthStartS = model.states.reduce((a, x) =>
      x.stats.height > a.stats.height ? x : a
    );

  return model;
}

export default processModel;
