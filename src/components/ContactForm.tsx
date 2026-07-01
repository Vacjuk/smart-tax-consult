import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { inquirySchema, type InquiryFormData } from "@/lib/inquiry.schema";
import { submitInquiry } from "@/lib/inquiry.functions";

const services = [
  "Daňové přiznání",
  "Účetnictví",
  "Poradenství",
  "Audit",
  "Jiné",
];

interface ContactFormProps {
  defaultService?: string;
}

export function ContactForm({ defaultService }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = useServerFn(submitInquiry);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      service: defaultService && services.includes(defaultService) ? defaultService : "",
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    try {
      await submit({ data });
      toast.success("Poptávka byla odeslána. Ozvu se vám do 24 hodin.");
      reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Odeslání se nezdařilo. Zkuste to znovu."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-brand-primary/50">
            Jméno
          </Label>
          <Input
            id="name"
            placeholder="Jan Novák"
            {...register("name")}
            className="bg-white border-0 border-b border-brand-primary/10 rounded-none px-3 py-3 focus-visible:ring-0 focus-visible:border-brand-accent"
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-brand-primary/50">
            E-mail
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="email@priklad.cz"
            {...register("email")}
            className="bg-white border-0 border-b border-brand-primary/10 rounded-none px-3 py-3 focus-visible:ring-0 focus-visible:border-brand-accent"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="service" className="text-[10px] uppercase font-bold tracking-widest text-brand-primary/50">
          Služba
        </Label>
        <Select onValueChange={(value) => setValue("service", value)}>
          <SelectTrigger className="bg-white border-0 border-b border-brand-primary/10 rounded-none px-3 py-3 focus:ring-0 focus:border-brand-accent">
            <SelectValue placeholder="Vyberte službu" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-brand-primary/50">
          Zpráva
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Popište stručně váš požadavek..."
          {...register("message")}
          className="bg-white border-0 border-b border-brand-primary/10 rounded-none px-3 py-3 resize-none focus-visible:ring-0 focus-visible:border-brand-accent"
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 h-auto bg-brand-primary text-white font-medium hover:bg-brand-accent transition-all uppercase tracking-widest text-sm rounded-none"
      >
        {isSubmitting ? "Odesílání..." : "Odeslat poptávku"}
      </Button>
    </form>
  );
}
