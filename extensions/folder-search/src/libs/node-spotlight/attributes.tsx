import { parseDate, parseString, parseBoolean, parseArray, parseArrayOfStrings } from "./parse";

type AttributeParser = (s: string) => string | number | boolean | Date | string[] | number[] | null;

const attributes: { [key: string]: AttributeParser } = {
  _kMDItemOwnerUserID: parseInt,
  kMDItemAcquisitionMake: parseString,
  kMDItemAcquisitionModel: parseString,
  kMDItemAlbum: parseString,
  kMDItemAperture: parseString,
  kMDItemAppleLoopDescriptors: parseArrayOfStrings,
  kMDItemAppleLoopsKeyFilterType: parseString,
  kMDItemAppleLoopsLoopMode: parseString,
  kMDItemAppleLoopsRootKey: parseString,
  kMDItemAttributeChangeDate: parseDate,
  kMDItemAudiences: parseArrayOfStrings,
  kMDItemAudioBitRate: parseFloat,
  kMDItemAudioChannelCount: parseInt,
  kMDItemAudioEncodingApplication: parseString,
  kMDItemAudioSampleRate: parseFloat,
  kMDItemAudioTrackNumber: parseInt,
  kMDItemAuthors: parseArrayOfStrings,
  kMDItemAuthorAddresses: parseArrayOfStrings,
  kMDItemBitsPerSample: parseInt,
  kMDItemCity: parseString,
  kMDItemCodecs: parseArrayOfStrings,
  kMDItemColorSpace: parseString,
  kMDItemComment: parseString,
  kMDItemComposer: parseString,
  kMDItemContactKeywords: parseArrayOfStrings,
  kMDItemContentCreationDate: parseDate,
  kMDItemContentModificationDate: parseDate,
  kMDItemContentType: parseString,
  kMDItemContentTypeTree: parseArrayOfStrings,
  kMDItemContributors: parseArrayOfStrings,
  kMDItemCopyright: parseString,
  kMDItemCountry: parseString,
  kMDItemCoverage: parseString,
  kMDItemCreator: parseString,
  kMDItemDateAdded: parseDate,
  kMDItemDeliveryType: parseString,
  kMDItemDescription: parseString,
  kMDItemDisplayName: parseString,
  kMDItemDownloadedDate: parseArray(parseDate),
  kMDItemDueDate: parseDate,
  kMDItemDurationSeconds: parseFloat,
  kMDItemEmailAddresses: parseArrayOfStrings,
  kMDItemEncodingApplications: parseArrayOfStrings,
  kMDItemEXIFVersion: parseString,
  kMDItemExposureMode: parseInt,
  kMDItemExposureProgram: parseString,
  kMDItemExposureTimeSeconds: parseFloat,
  kMDItemExposureTimeString: parseString,
  kMDItemFinderComment: parseString,
  kMDItemFlashOnOff: parseBoolean,
  kMDItemFNumber: parseFloat,
  kMDItemFocalLength: parseFloat,
  kMDItemFonts: parseArrayOfStrings,
  kMDItemFSContentChangeDate: parseDate,
  kMDItemFSCreationDate: parseDate,
  kMDItemFSCreatorCode: parseString,
  kMDItemFSFinderFlags: parseInt,
  kMDItemFSHasCustomIcon: parseInt,
  kMDItemFSInvisible: parseBoolean,
  kMDItemFSIsExtensionHidden: parseBoolean,
  kMDItemFSIsStationery: parseBoolean,
  kMDItemFSLabel: parseInt,
  kMDItemFSName: parseString,
  kMDItemFSNodeCount: parseInt,
  kMDItemFSOwnerGroupID: parseInt,
  kMDItemFSOwnerUserID: parseInt,
  kMDItemFSSize: parseInt,
  kMDItemFSTypeCode: parseString,
  kMDItemHasAlphaChannel: parseBoolean,
  kMDItemHeadline: parseString,
  kMDItemIdentifier: parseString,
  kMDItemInstantMessageAddresses: parseArrayOfStrings,
  kMDItemInstructions: parseArrayOfStrings,
  kMDItemIsGeneralMIDISequence: parseBoolean,
  kMDItemISOSpeed: parseInt,
  kMDItemKeySignature: parseString,
  kMDItemKeywords: parseArrayOfStrings,
  kMDItemKind: parseString,
  kMDItemLanguages: parseArrayOfStrings,
  kMDItemLastUsedDate: parseDate,
  kMDItemLayerNames: parseArrayOfStrings,
  kMDItemLogicalSize: parseInt,
  kMDItemLyricist: parseString,
  kMDItemMaxAperture: parseFloat,
  kMDItemMediaTypes: parseArrayOfStrings,
  kMDItemMeteringMode: parseString,
  kMDItemMusicalGenre: parseString,
  kMDItemMusicalInstrumentCategory: parseString,
  kMDItemMusicalInstrumentName: parseString,
  kMDItemNamedLocation: parseString,
  kMDItemNumberOfPages: parseInt,
  kMDItemOrganizations: parseArrayOfStrings,
  kMDItemOrientation: parseInt,
  kMDItemPageHeight: parseFloat,
  kMDItemPageWidth: parseFloat,
  kMDItemParticipants: parseArrayOfStrings,
  kMDItemPath: parseString,
  kMDItemPhoneNumbers: parseArrayOfStrings,
  kMDItemPhysicalSize: parseInt,
  kMDItemPixelCount: parseInt,
  kMDItemPixelHeight: parseInt,
  kMDItemPixelWidth: parseInt,
  kMDItemProfileName: parseString,
  kMDItemProjects: parseArrayOfStrings,
  kMDItemPublishers: parseArrayOfStrings,
  kMDItemRecipients: parseArrayOfStrings,
  kMDItemRecipientAddresses: parseArrayOfStrings,
  kMDItemRecordingDate: parseDate,
  kMDItemRecordingYear: parseInt,
  kMDItemRedEyeOnOff: parseBoolean,
  kMDItemResolutionHeightDPI: parseFloat,
  kMDItemResolutionWidthDPI: parseFloat,
  kMDItemRights: parseString,
  kMDItemSecurityMethod: parseString,
  kMDItemStarRating: parseFloat,
  kMDItemStateOrProvince: parseString,
  kMDItemStreamable: parseBoolean,
  kMDItemTempo: parseFloat,
  kMDItemTextContent: parseString,
  kMDItemTimeSignature: parseString,
  kMDItemTitle: parseString,
  kMDItemTotalBitRate: parseFloat,
  kMDItemUseCount: parseInt,
  kMDItemUsedDates: parseArray(parseDate),
  kMDItemUserCreatedDate: parseArray(parseDate),
  kMDItemUserCreatedUserHandle: parseArray((s) => parseInt(s)),
  kMDItemVersion: parseString,
  kMDItemVideoBitRate: parseFloat,
  kMDItemWhereFroms: parseArrayOfStrings,
  kMDItemWhiteBalance: parseInt,
};

export default attributes;
