
import type { TStateHandlerReturn } from 'vast';

import VestTest from 'VestTest';
import ctx from 'ctx';
import type { TDraftResult } from 'produceDraft';

export function useCarryOverTests(): TStateHandlerReturn<VestTest[]> {
  return useStateRef().carryOverTests();
}
export function usePending(): TStateHandlerReturn<VestTest[]> {
  return useStateRef().pending();
}
export function useLagging(): TStateHandlerReturn<VestTest[]> {
  return useStateRef().lagging();
}
export function useSuiteId(): TStateHandlerReturn<string> {
  return useStateRef().suiteId();
}
export function useTestCallbacks(): TStateHandlerReturn<{
  fieldCallbacks: Record<string, ((res: TDraftResult) => void)[]>;
  doneCallbacks: ((res: TDraftResult) => void)[];
}> {
  return useStateRef().testCallbacks();
}
export function useTestObjects(): TStateHandlerReturn<VestTest[]> {
  return useStateRef().testObjects();
}
export function useSkippedTests(): TStateHandlerReturn<VestTest[]> {
  return useStateRef().skippedTests();
}
export function useOptionalFields(): TStateHandlerReturn<
  Record<string, boolean>
> {
  return useStateRef().optionalFields();
}
export function useStateRef(): Exclude<
  ReturnType<typeof ctx.useX>['stateRef'],
  void
> {
  return ctx.useX().stateRef!;
}