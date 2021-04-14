export default async (_, res) => {
  res.clearPreviewData();

  res.end("Preview mode ended.");
};
