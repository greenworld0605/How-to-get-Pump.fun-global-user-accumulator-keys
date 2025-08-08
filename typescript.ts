const [GLOBAL_VOLUME_ACCUMULATOR] = PublicKey.findProgramAddressSync(
  [Buffer.from("global_volume_accumulator")], new PublicKey(PUMP_PROGRAM_ADDRESS)
)
const [USER_VOLUME_ACCUMULATOR] = PublicKey.findProgramAddressSync(
  [Buffer.from("user_volume_accumulator"), new PublicKey(this.walletService.wallet.publicKey).toBuffer()], new PublicKey(PUMP_PROGRAM_ADDRESS)
)


const keys = action === "buy" ? [
  { pubkey: new PublicKey(GLOBAL), isSigner: false, isWritable: false },
  { pubkey: new PublicKey(FEE_RECIPIENT), isSigner: false, isWritable: true },
  { pubkey: mint, isSigner: false, isWritable: false },
  {
    pubkey: bondingCurve,
    isSigner: false,
    isWritable: true,
  },
  {
    pubkey: associatedBondingCurve,
    isSigner: false,
    isWritable: true,
  },
  { pubkey: splAta, isSigner: false, isWritable: true },
  { pubkey: this.walletService.wallet.publicKey, isSigner: false, isWritable: true },
  { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
  {
    pubkey: TOKEN_PROGRAM_ID,
    isSigner: false,
    isWritable: true,
  },
  {
    pubkey: CREATOR_FEE_VAULT,
    isSigner: false,
    isWritable: true,
  },
  { pubkey: new PublicKey(PUMP_FUN_ACCOUNT), isSigner: false, isWritable: false },
  { pubkey: new PublicKey(PUMP_PROGRAM_ADDRESS), isSigner: false, isWritable: false },
  { pubkey: GLOBAL_VOLUME_ACCUMULATOR, isSigner: false, isWritable: true },
  { pubkey: USER_VOLUME_ACCUMULATOR, isSigner: false, isWritable: true }
] : [
  { pubkey: new PublicKey(GLOBAL), isSigner: false, isWritable: false },
  { pubkey: new PublicKey(FEE_RECIPIENT), isSigner: false, isWritable: true },
  { pubkey: mint, isSigner: false, isWritable: false },
  {
    pubkey: bondingCurve,
    isSigner: false,
    isWritable: true,
  },
  {
    pubkey: associatedBondingCurve,
    isSigner: false,
    isWritable: true,
  },
  { pubkey: splAta, isSigner: false, isWritable: true },
  { pubkey: this.walletService.wallet.publicKey, isSigner: false, isWritable: true },
  { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
  {
    pubkey: CREATOR_FEE_VAULT,
    isSigner: false,
    isWritable: true,
  },
  {
    pubkey: TOKEN_PROGRAM_ID,
    isSigner: false,
    isWritable: true,
  },
  { pubkey: new PublicKey(PUMP_FUN_ACCOUNT), isSigner: false, isWritable: false },
  { pubkey: new PublicKey(PUMP_PROGRAM_ADDRESS), isSigner: false, isWritable: false }
];