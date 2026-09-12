import React from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Input } from '../ui/Input';
import { ModernSelect } from '../ui/ModernSelect';
import { HeartHandshake, User, Search, CheckCircle2 } from 'lucide-react';

interface Props {
  register: UseFormRegister<BiodataFormValues>;
  setValue: UseFormSetValue<BiodataFormValues>;
  watch: UseFormWatch<BiodataFormValues>;
  errors: FieldErrors<BiodataFormValues>;
}

export function PersonalDetails({ register, setValue, watch, errors }: Props) {
  const genderValue = watch('gender') || '';
  const maritalStatusValue = watch('maritalStatus') || '';
  const lookingForValue = watch('lookingFor') || '';

  const handleGenderChange = (g: 'Male' | 'Female') => {
    setValue('gender', g, { shouldValidate: true });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-8 h-8 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold text-sm border border-brand-emerald/20">
          <User size={16} className="text-brand-gold" />
        </div>
        <h3 className="text-base sm:text-lg font-bold font-playfair text-brand-charcoal">
          1. Candidate Details
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <Input 
          label="Full Name" 
          {...register('fullName')} 
          error={errors.fullName?.message} 
          placeholder="Enter your full name" 
        />

        {/* Gender UI: Male -> Blue, Female -> Pink */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => handleGenderChange('Male')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all border flex items-center justify-center gap-1.5 cursor-pointer ${
                genderValue === 'Male'
                  ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-400 shadow-md shadow-blue-500/20'
                  : 'bg-blue-50/70 text-blue-900 border-blue-200 hover:border-blue-400 hover:bg-blue-100/60'
              }`}
            >
              <span>Male</span>
              {genderValue === 'Male' && <CheckCircle2 size={14} className="text-white" />}
            </button>
            <button
              type="button"
              onClick={() => handleGenderChange('Female')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all border flex items-center justify-center gap-1.5 cursor-pointer ${
                genderValue === 'Female'
                  ? 'bg-pink-600 text-white border-pink-600 ring-2 ring-pink-400 shadow-md shadow-pink-500/20'
                  : 'bg-pink-50/70 text-pink-900 border-pink-200 hover:border-pink-400 hover:bg-pink-100/60'
              }`}
            >
              <span>Female</span>
              {genderValue === 'Female' && <CheckCircle2 size={14} className="text-white" />}
            </button>
          </div>
          {errors.gender && (
            <p className="mt-1 text-xs text-red-500">{errors.gender.message}</p>
          )}
        </div>

        {/* Looking For */}
        <div>
          <ModernSelect
            label="Looking For"
            icon={<Search size={16} />}
            placeholder="Select Looking For"
            value={lookingForValue.startsWith('Others') ? 'Others (Specify)' : lookingForValue}
            onChange={(val) => setValue('lookingFor', val, { shouldValidate: true })}
            error={errors.lookingFor?.message}
            options={[
              { value: 'Self', label: 'Self' },
              { value: 'Son', label: 'Son' },
              { value: 'Daughter', label: 'Daughter' },
              { value: 'Brother', label: 'Brother' },
              { value: 'Sister', label: 'Sister' },
              { value: 'Others (Specify)', label: 'Others (Specify)' },
            ]}
          />
          {lookingForValue.startsWith('Others') && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Please specify (e.g. Relative, Friend, Ward)"
                onChange={(e) => setValue('lookingFor', e.target.value ? `Others: ${e.target.value}` : 'Others (Specify)', { shouldValidate: true })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm outline-none focus:border-brand-gold"
              />
            </div>
          )}
        </div>

        {/* Marital Status (Kept) */}
        <ModernSelect
          label="Marital Status"
          icon={<HeartHandshake size={16} />}
          placeholder="Select Status"
          value={maritalStatusValue}
          onChange={(val) => setValue('maritalStatus', val as any, { shouldValidate: true })}
          error={errors.maritalStatus?.message}
          options={[
            { value: 'Never Married', label: 'Never Married' },
            { value: 'Divorced', label: 'Divorced' },
            { value: 'Widowed', label: 'Widowed' },
            { value: 'Separated', label: 'Separated' },
            { value: 'Annulled', label: 'Annulled' },
          ]}
        />

        <Input 
          label="Height (e.g. 5'8&quot;)" 
          {...register('height')} 
          error={errors.height?.message} 
          placeholder="e.g. 5'8&quot;" 
        />

        <Input 
          label="City / State" 
          {...register('city')} 
          error={errors.city?.message} 
          placeholder="e.g. Bengaluru, Karnataka" 
        />
      </div>
    </div>
  );
}
