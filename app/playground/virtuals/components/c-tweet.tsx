"use client";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Tweet } from "./tweet";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
import { extractTweetId } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import API from "@/api";

const CharacterDetails = () => {
  const { data: { data: getVirtual } = {} } = useQuery({
    queryKey: ["getVirtual"],
    queryFn: API.getVirtual,
  });

  const {
    handleSubmit,
    reset,
    getValues,
    setValue,
    setError,
    control,
    register,
    formState: { isDirty, isValid },
  } = useForm({ mode: "onChange", values: getVirtual });

  return (
    <>
      <div className="flex-shrink-0 md:flex-shrink md:min-w-96 snap-center rounded-md min-h-[250px] bg-background-100 w-full h-full">
        <div className="w-full h-full rounded-md border border-gray-alpha-400">
          <div className="flex flex-col flex-no-wrap h-full overflow-y-auto overscroll-y-none">
            <div className="sticky top-0 z-10 flex-shrink-0 min-w-0 min-h-0 px-4 py-2 border-b bg-background">
              <h1 className="font-bold">Character Details</h1>
              <p className="text-xs"></p>
            </div>
            <div className="flex-1 min-w-0 flex flex-col items-start justify-start space-y-4 p-4">
              <div className="grid gap-4 w-full">
                <Label className="text-left">Name</Label>
                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  render={({ field, fieldState }) => {
                    return <Input required {...field} />;
                  }}
                />
              </div>
              <div className="grid gap-4 w-full">
                <Label className="text-left">Goal</Label>
                <Controller
                  control={control}
                  name="game.goal"
                  defaultValue=""
                  render={({ field, fieldState }) => {
                    return <Textarea required {...field} />;
                  }}
                />
              </div>
              <div className="grid gap-4 w-full">
                <Label className="text-left">World Info</Label>
                <Controller
                  control={control}
                  name="game.worldInfo"
                  defaultValue=""
                  render={({ field, fieldState }) => {
                    return <Textarea required {...field} />;
                  }}
                />
              </div>
              <div className="grid gap-4 w-full">
                <Label className="text-left">Description</Label>
                <Controller
                  control={control}
                  name="game.description"
                  defaultValue=""
                  render={({ field, fieldState }) => {
                    return <Textarea required {...field} />;
                  }}
                />
              </div>
              <div className="grid gap-4 w-full">
                <Label className="text-left">Functions</Label>
                <Controller
                  control={control}
                  name="game.functions"
                  defaultValue=""
                  render={({ field, fieldState }) => {
                    return <Textarea required {...field} />;
                  }}
                />
              </div>
            </div>
            <div className="sticky bottom-0 flex-shrink-0 min-w-0 min-h-0 p-2 px-4 py-4 bg-background">
       
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SimulateReplyTweet = () => {
  const { data: { data: getVirtual } = {} } = useQuery({
    queryKey: ["getVirtual"],
    queryFn: API.getVirtual,
  });

  const {
    handleSubmit,
    reset,
    getValues,
    setValue,
    setError,
    control,
    register,
    formState: { isDirty, isValid },
  } = useForm({ mode: "onChange", values: getVirtual });
  return (
    <>
      <div className="flex-shrink-0 md:flex-shrink md:min-w-96 snap-center rounded-md min-h-[250px] bg-background-100 w-full h-full">
        <div className="w-full h-full rounded-md border border-gray-alpha-400">
          <div className="flex flex-col flex-no-wrap h-full overflow-y-auto overscroll-y-none">
            <div className="sticky top-0 z-10 flex-shrink-0 min-w-0 min-h-0 px-4 py-2 border-b bg-background">
              <h1 className="font-bold">Simulate Reply Tweet</h1>
            </div>
            <div className="flex-1 min-w-0 flex flex-col items-start justify-start space-y-4 p-4">
              <p className="text-xs">
                Test how your virtual character would respond to tweets
                <br />
                P.S. You can add "I will always reply tweet, I will never ignore
                a tweet." to allow the agent to reply to tweets
              </p>
              <div className="grid gap-4 w-full">
                <Label className="text-left">X/Tweet ID </Label>
                <p className="text-xs italic">
                  Simulate agent reading X (Twitter) timeline by passing the X
                  Post ID.
                </p>
                <Controller
                  control={control}
                  name="tweet_id"
                  defaultValue=""
                  render={({ field, fieldState }) => {
                    return <Input required {...field} />;
                  }}
                />
              </div>

              <div className="grid gap-4 w-full">
                <Label className="text-left">Session ID</Label>
                <Controller
                  control={control}
                  name="session_id"
                  defaultValue=""
                  render={({ field, fieldState }) => {
                    return <Input required {...field} />;
                  }}
                />
              </div>
            </div>
            <div className="sticky bottom-0 flex-shrink-0 min-w-0 min-h-0 p-2 px-4 py-4 bg-background">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Panels = ({}) => {
  const methods = useForm();
  return (
    <>
      <CharacterDetails />
      <SimulateReplyTweet />
    </>
  );
};