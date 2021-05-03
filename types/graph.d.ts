import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Icon = {
  __typename?: 'Icon';
  color?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  url?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type Occupation = {
  __typename?: 'Occupation';
  imageSrc?: Maybe<Scalars['String']>;
  timeframe?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  socials?: Maybe<Array<Maybe<Social>>>;
  skills?: Maybe<Array<Maybe<Skill>>>;
  occupation?: Maybe<Array<Maybe<Occupation>>>;
};

export type Skill = {
  __typename?: 'Skill';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  display?: Maybe<SkillDisplay>;
};

export type SkillDisplay = Icon | Image;

export type Social = {
  __typename?: 'Social';
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Icon: ResolverTypeWrapper<Icon>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Image: ResolverTypeWrapper<Image>;
  Occupation: ResolverTypeWrapper<Occupation>;
  Query: ResolverTypeWrapper<{}>;
  Skill: ResolverTypeWrapper<Omit<Skill, 'display'> & { display?: Maybe<ResolversTypes['SkillDisplay']> }>;
  SkillDisplay: ResolversTypes['Icon'] | ResolversTypes['Image'];
  Social: ResolverTypeWrapper<Social>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Icon: Icon;
  String: Scalars['String'];
  Image: Image;
  Occupation: Occupation;
  Query: {};
  Skill: Omit<Skill, 'display'> & { display?: Maybe<ResolversParentTypes['SkillDisplay']> };
  SkillDisplay: ResolversParentTypes['Icon'] | ResolversParentTypes['Image'];
  Social: Social;
  Boolean: Scalars['Boolean'];
};

export type IconResolvers<ContextType = any, ParentType extends ResolversParentTypes['Icon'] = ResolversParentTypes['Icon']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OccupationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Occupation'] = ResolversParentTypes['Occupation']> = {
  imageSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  socials?: Resolver<Maybe<Array<Maybe<ResolversTypes['Social']>>>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<Maybe<ResolversTypes['Skill']>>>, ParentType, ContextType>;
  occupation?: Resolver<Maybe<Array<Maybe<ResolversTypes['Occupation']>>>, ParentType, ContextType>;
};

export type SkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<Maybe<ResolversTypes['SkillDisplay']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillDisplayResolvers<ContextType = any, ParentType extends ResolversParentTypes['SkillDisplay'] = ResolversParentTypes['SkillDisplay']> = {
  __resolveType: TypeResolveFn<'Icon' | 'Image', ParentType, ContextType>;
};

export type SocialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Social'] = ResolversParentTypes['Social']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Icon?: IconResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Occupation?: OccupationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  SkillDisplay?: SkillDisplayResolvers<ContextType>;
  Social?: SocialResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
