interface ContentRendererProps {
  contents: string[];
  category: string;
  scenarioId: string;
  chapter: string;
  pageIndex: number;
}

export default function ContentRenderer({
  contents,
  category,
  scenarioId,
  chapter,
  pageIndex,
}: ContentRendererProps) {
  return (
    <>
      {contents.map((content) => {
        if (content.startsWith("img:")) {
          const imgSrc = `/chapter/${category}/${scenarioId}/${chapter}/${pageIndex}/${content.replace(
            "img:",
            ""
          )}`;
          return <img src={imgSrc} key={content} alt="content" />;
        }

        if (content.startsWith("title:")) {
          return (
            <div
              className="text-32pt mt-24 font-noto font-bold text-point min-h-12 text-center"
              key={content}
            >
              {content.replace("title:", "")}
            </div>
          );
        }

        if (content.startsWith("exampleImg:")) {
          return <img className="h-24" src="/example.png" key={content} />;
        }

        return (
          <div
            className="text-32pt font-noto font-bold text-point min-h-12 text-center"
            key={content}
          >
            {content}
          </div>
        );
      })}
    </>
  );
}
