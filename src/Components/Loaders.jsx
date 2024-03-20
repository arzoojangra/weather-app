import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const WeatherWidgetSkeleton = () => {
  return (
    <div className="m-auto rounded-2xl bg-pink-400 bg-opacity-20 overflow-hidden flex flex-col backdrop-blur-sm p-2 sm:h-3/5 h-4/5 sm:w-1/3 w-2/3">
      <div className="w-full h-fit p-2">
        <Skeleton
          className="p-2"
          style={{
            backgroundColor: "rgba(244, 114, 182, 0.3)",
            color: "rgba(244, 114, 182)",
          }}
        />
      </div>

      <div className="w-1/3 h-1/6 items-center m-auto">
        <Skeleton
          className="p-2"
          style={{
            backgroundColor: "rgba(244, 114, 182, 0.3)",
            color: "rgba(244, 114, 182)",
          }}
        />
      </div>

      <div className="w-full h-1/3 flex flex-col gap-2 p-2">
      <div className="w-1/2 h-32 m-auto flex items-center justify-center p-1">
        <div className="w-full p-2">
          <Skeleton
            className="p-1 h-32"
            style={{
              backgroundColor: "rgba(244, 114, 182, 0.3)",
              color: "rgba(244, 114, 182)",
            }}
          />
        </div>
      </div>
      </div>

      <div className="w-1/3 h-1/3 items-center m-auto">
        <Skeleton
          className="p-1"
          style={{
            backgroundColor: "rgba(244, 114, 182, 0.3)",
            color: "rgba(244, 114, 182)",
          }}
        />
      </div>
      {/* </div> */}

      <div className="w-full h-1/6 flex flex-col gap-2 p-1 mb-2">
        <div className="h-1/2 w-1/2 items-center m-auto">
          <Skeleton
            className="h-full p-1"
            style={{
              backgroundColor: "rgba(244, 114, 182, 0.3)",
              color: "rgba(244, 114, 182)",
            }}
          />
        </div>
        <div className="h-1/2 w-2/3 items-center m-auto">
          <Skeleton
            className="h-full p-1"
            style={{
              backgroundColor: "rgba(244, 114, 182, 0.3)",
              color: "rgba(244, 114, 182)",
            }}
          />
        </div>
      </div>

      <div className="h-1/3 w-full flex flex-col">
        <div className="h-2/3 flex flex-row w-full">
          <div className="h-full w-full flex flex-col m-auto items-center">
            <div className="h-1/2 w-1/2 m-auto items-center flex">
              <div className="w-full p-1">
                <Skeleton
                  className="p-1"
                  style={{
                    backgroundColor: "rgba(244, 114, 182, 0.3)",
                    color: "rgba(244, 114, 182)",
                  }}
                />
              </div>
            </div>
            <div className="h-1/2 w-1/2 m-auto items-center flex">
              <div className="w-full p-1">
                <Skeleton
                  className="p-1"
                  style={{
                    backgroundColor: "rgba(244, 114, 182, 0.3)",
                    color: "rgba(244, 114, 182)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="h-full w-full flex flex-col m-auto items-center">
            <div className="h-1/2 w-1/2 m-auto items-center flex">
              <div className="w-full p-1">
                <Skeleton
                  className="p-1"
                  style={{
                    backgroundColor: "rgba(244, 114, 182, 0.3)",
                    color: "rgba(244, 114, 182)",
                  }}
                />
              </div>
            </div>
            <div className="h-1/2 w-1/2 m-auto items-center flex">
              <div className="w-full p-1">
                <Skeleton
                  className="p-1"
                  style={{
                    backgroundColor: "rgba(244, 114, 182, 0.3)",
                    color: "rgba(244, 114, 182)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-1/3 flex items-center m-auto w-1/3">
          <div className="w-full p-1">
            <Skeleton
              className="p-1"
              style={{
                backgroundColor: "rgba(244, 114, 182, 0.3)",
                color: "rgba(244, 114, 182)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
